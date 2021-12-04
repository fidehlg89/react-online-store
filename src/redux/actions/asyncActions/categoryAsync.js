import { toast } from "react-toastify";
import axiosAPI from "../../../service/api";
import {
    getCategory, getCategoriesSuccess, getCategories, countCategories,
    deleteCategory, /* deleteCategoriesSuccess, */ deleteCategoryFailure
} from "../categoryActions";

// get Category list
export const getCategoryAsync = (id) => async dispatch => {
    dispatch(getCategory);
    try {
        const res = await axiosAPI.get("categories/" + id);
        const item = res.data
        dispatch(getCategoriesSuccess(item));
    } catch (err) {
        console.log(err);
    }
}

// get Category list
export const getCategoriesAsync = () => async dispatch => {
    dispatch(getCategories);
    try {
        const res = await axiosAPI.get('categories');
        const data = res.data;
        dispatch(getCategoriesSuccess(data));
        dispatch(countCategories(data.length));
    } catch (err) {
        console.log(err);
    }
}

// create Category async
export const createCategoryAsync = (category) => async dispatch => {
    try {
        const res = await axiosAPI.post('Category', category);
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// update Category
export const updateCategoryAsync = (category) => async dispatch => {
    try {
        const res = await axiosAPI.put('category/' + category.id, { ...category, "id": category.id });
        console.log(res.data);
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// delete Category
export const deleteCategoryAsync = (category) => async dispatch => {
    dispatch(deleteCategory);
    try {
        const res = await axiosAPI.delete('category/' + category.id);
        if (res.status === 204) {
            alert('Objeto eliminado');
            dispatch(getCategoriesAsync());
            //dispatch(deletecategoriesuccess());
        } else alert('No se ha podido eliminar el objeto');
    } catch (err) {
        dispatch(deleteCategoryFailure(err));
        alert("Error eliminando el objeto. " + err);
    }
}