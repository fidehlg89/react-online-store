import {
  GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, COUNT_PRODUCTS,
  DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, MESSAGE
} from "./actionTypes";

// to get the especifict PRODUCT
export const getProduct = () => {
  return {
    type: GET_PRODUCT
  }
}

// to get the especifict PRODUCT
export const getProductSuccess = (item) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: {
      item
    }
  }
}

// to get the list of PRODUCTs
export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}

// to get the list of PRODUCTs
export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: {
      data
    }
  }
}

// count PRODUCTs
export const countProducts = (count) => {
  return {
    type: COUNT_PRODUCTS,
    payload: {
      count
    }
  }
}

// Message
export const Message = (message) => {
  return {
    type: MESSAGE,
    payload: {
      message
    }
  }
}

// delete PRODUCT
export const deleteProduct = (data) => {
  return {
    type: DELETE_PRODUCT,
    payload: data
  }
}

// PRODUCT delete success
export const deleteProductSuccess = data => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: {
      data
    }
  }
}

// PRODUCT delete failture
export const deleteProductFailure = error => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: {
      error
    }
  }
}