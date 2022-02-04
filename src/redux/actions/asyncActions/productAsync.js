import { toast } from "react-toastify";
import axiosAPI from "../../../service/api";
import {
  getProduct,
  getProductSuccess,
  getProducts,
  getProductsSuccess,
  countProducts,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailure,
} from "../productActions";

// create Product async
export const createProductAsync = (product) => async (dispatch) => {
  try {
    const res = await axiosAPI.post("products", product);
    toast.success(res.data.message);
  } catch (err) {
    toast.success(err);
  }
};

// read Product async
export const getProductAsync = (id) => async (dispatch) => {
  dispatch(getProduct);
  try {
    const res = await axiosAPI.get(`${"products/" + id}`);
    const data = res.data;
    dispatch(getProductSuccess(data));
  } catch (err) {
    console.log(err);
  }
};

// get Products list async
export const getProductsAsync = () => async (dispatch) => {
  dispatch(getProducts);
  try {
    const res = await axiosAPI.get("products");
    const data = res.data;
    dispatch(getProductsSuccess(data));
    dispatch(countProducts(data.length));
  } catch (err) {
    console.log(err);
  }
};

export const updateProductAsync = (product) => async (dispatch) => {
  try {
    const res = await axiosAPI.put("products/" + product.id, {
      ...product,
      id: product.id,
    });
    toast.success(res.data.message);
  } catch (err) {
    toast.success(err);
  }
};

// delete product
export const deleteProductAsync = (product) => async (dispatch) => {
  dispatch(deleteProduct);
  try {
    const res = await axiosAPI.delete("products/" + product.id);
    if (res.status === 200) {
      alert("Objeto eliminado");
      dispatch(getProductsAsync());
      //dispatch(deleteProductSuccess());
    } else alert("No se ha podido eliminar el objeto");
  } catch (err) {
    dispatch(deleteProductFailure(err));
    alert("Error eliminando el objeto. " + err);
  }
};
