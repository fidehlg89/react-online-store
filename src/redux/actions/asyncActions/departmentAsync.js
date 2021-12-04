import { toast } from "react-toastify";
import axiosAPI from "../../../service/api";
import {
    getDepartment, getDepartmentSuccess, getDepartments, getDepartmentsSuccess, countDepartments,
    deleteDepartment, /* deleteDepartmentSuccess, */ deleteDepartmentFailure
} from "../departmentActions";

// get Department list
export const getDepartmentAsync = (id) => async dispatch => {
    console.log(id);
    dispatch(getDepartment);
    try {
        const res = await axiosAPI.get("departments/" + id);
        const item = res.data
        dispatch(getDepartmentSuccess(item));
    } catch (err) {
        console.log(err);
    }
}

// get Department list
export const getDepartmentsAsync = () => async dispatch => {
    dispatch(getDepartments);
    try {
        const res = await axiosAPI.get('departments');
        const data = res.data;
        dispatch(getDepartmentsSuccess(data));
        dispatch(countDepartments(data.length));
    } catch (err) {
        console.log(err);
    }
}

// create Department async
export const createDepartmentAsync = (Department) => async dispatch => {
    try {
        const res = await axiosAPI.post('Department', Department);
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// update Department
export const updateDepartmentAsync = (Department) => async dispatch => {
    console.log(Department);
    try {
        const res = await axiosAPI.put('Department/' + Department.id, { ...Department, "id": Department.id });
        console.log(res.data);
        toast.success(res.data.message);
    } catch (err) {
        toast.success(err);
    }
}

// delete Department
export const deleteDepartmentAsync = (Department) => async dispatch => {
    dispatch(deleteDepartment);
    try {
        const res = await axiosAPI.delete('Department/' + Department.id);
        if (res.status === 204) {
            alert('Objeto eliminado');
            dispatch(getDepartmentsAsync());
            //dispatch(deleteDepartmentSuccess());
        } else alert('No se ha podido eliminar el objeto');
    } catch (err) {
        dispatch(deleteDepartmentFailure(err));
        alert("Error eliminando el objeto. " + err);
    }
}