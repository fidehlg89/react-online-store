import {
  GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORIES, GET_CATEGORIES_SUCCESS, COUNT_CATEGORIES,
  DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, MESSAGE
} from "./actionTypes";

// to get the especifict CATEGORY
export const getCategory = () => {
  return {
    type: GET_CATEGORY
  }
}

// to get the especifict CATEGORY
export const getCategorySuccess = (item) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: {
      item
    }
  }
}

// to get the list of Categories
export const getCategories = () => {
  return {
    type: GET_CATEGORIES
  }
}

// to get the list of Categories
export const getCategoriesSuccess = (data) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: {
      data
    }
  }
}

// count Categories
export const countCategories = (count) => {
  return {
    type: COUNT_CATEGORIES,
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

// delete CATEGORY
export const deleteCategory = (data) => {
  return {
    type: DELETE_CATEGORY,
    payload: data
  }
}

// CATEGORY delete success
export const deleteCategorySuccess = data => {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    payload: {
      data
    }
  }
}

// CATEGORY delete failture
export const deleteCategoryFailure = error => {
  return {
    type: DELETE_CATEGORY_FAILURE,
    payload: {
      error
    }
  }
}