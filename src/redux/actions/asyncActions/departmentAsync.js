import { toast } from "react-toastify";
import axiosAPI from "../../../service/api";
import {
  getDepartment,
  getDepartmentSuccess,
  getDepartments,
  getDepartmentsSuccess,
  countDepartments,
  deleteDepartment,
  /* deleteDepartmentSuccess, */ deleteDepartmentFailure,
} from "../departmentActions";

// get Department list
export const getDepartmentAsync = (id) => async (dispatch) => {
  dispatch(getDepartment);
  try {
    const res = await axiosAPI.get("departments/" + id);
    const item = res.data;
    dispatch(getDepartmentSuccess(item));
  } catch (err) {
    console.log(err);
  }
};

// get Department list
export const getDepartmentsAsync = () => async (dispatch) => {
  dispatch(getDepartments);
  try {
    const res = await axiosAPI.get("departments");
    const data = res.data;
    dispatch(getDepartmentsSuccess(data));
    dispatch(countDepartments(data.length));
  } catch (err) {
    console.log(err);
  }
};

// create Department async
export const createDepartmentAsync = (department) => async (dispatch) => {
  try {
    const res = await axiosAPI.post("departments", department);
    toast.success(res.data.message);
  } catch (err) {
    toast.success(err);
  }
};

// update Department
export const updateDepartmentAsync = (department) => async (dispatch) => {
  console.log(department);
  try {
    const res = await axiosAPI.put("departments/" + department.id, {
      ...department,
      id: department.id,
    });
    console.log(res.data);
    toast.success(res.data.message);
  } catch (err) {
    toast.success(err);
  }
};

// delete Department
export const deleteDepartmentAsync = (department) => async (dispatch) => {
  dispatch(deleteDepartment);
  try {
    const res = await axiosAPI.delete("departments/" + department.id);
    if (res.status === 200) {
      alert("Objeto eliminado");
      dispatch(getDepartmentsAsync());
      //dispatch(deleteDepartmentSuccess());
    } else alert("No se ha podido eliminar el objeto");
  } catch (err) {
    dispatch(deleteDepartmentFailure(err));
    alert("Error eliminando el objeto. " + err);
  }
};
