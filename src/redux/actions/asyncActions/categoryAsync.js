import { toast } from "react-toastify";
import axiosAPI from "../../../service/api";
import {
  getCategory,
  getCategorySuccess,
  getCategories,
  getCategoriesSuccess,
  countCategories,
  deleteCategory,
  deleteCategorySuccess,
  deleteCategoryFailure,
} from "../categoryActions";

// create Category async
export const createCategoryAsync = (category) => async (dispatch) => {
  try {
    const res = await axiosAPI.post("categories", category);
    toast.success(res.data.message);
  } catch (err) {
    toast.success(err);
  }
};

// read Category async
export const getCategoryAsync = (id) => async (dispatch) => {
  dispatch(getCategory);
  try {
    const res = await axiosAPI.get(`${"categories/" + id}`);
    const data = res.data;
    dispatch(getCategorySuccess(data));
  } catch (err) {
    console.log(err);
  }
};

// get Categorys list async
export const getCategoriesAsync = () => async (dispatch) => {
  dispatch(getCategories);
  try {
    const res = await axiosAPI.get("categories");
    const data = res.data;
    dispatch(getCategoriesSuccess(data));
    dispatch(countCategories(data.length));
  } catch (err) {
    console.log(err);
  }
};

export const updateCategoryAsync = (category) => async (dispatch) => {
  try {
    const res = await axiosAPI.put("categories/" + category.id, {
      ...category,
      id: category.id,
    });
    toast.success(res.data.message);
  } catch (err) {
    toast.success(err);
  }
};

// delete category
export const deleteCategoryAsync = (category) => async (dispatch) => {
  dispatch(deleteCategory);
  try {
    const res = await axiosAPI.delete("categories/" + category.id);
    if (res.status === 200) {
      alert("Objeto eliminado");
      dispatch(getCategoriesAsync());
      //dispatch(deleteCategorySuccess());
    } else alert("No se ha podido eliminar el objeto");
  } catch (err) {
    dispatch(deleteCategoryFailure(err));
    alert("Error eliminando el objeto. " + err);
  }
};
