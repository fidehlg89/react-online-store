import {
  GET_DEPARTMENT, GET_DEPARTMENT_SUCCESS, GET_DEPARTMENTS, GET_DEPARTMENTS_SUCCESS, COUNT_DEPARTMENTS,
  DELETE_DEPARTMENT, DELETE_DEPARTMENT_SUCCESS, DELETE_DEPARTMENT_FAILURE, MESSAGE
} from "./actionTypes";

// to get the especifict DEPARTMENT
export const getDepartment = () => {
  return {
    type: GET_DEPARTMENT
  }
}

// to get the especifict DEPARTMENT
export const getDepartmentSuccess = (item) => {
  return {
    type: GET_DEPARTMENT_SUCCESS,
    payload: {
      item
    }
  }
}

// to get the list of DEPARTMENTs
export const getDepartments = () => {
  return {
    type: GET_DEPARTMENTS
  }
}

// to get the list of DEPARTMENTs
export const getDepartmentsSuccess = (data) => {
  return {
    type: GET_DEPARTMENTS_SUCCESS,
    payload: {
      data
    }
  }
}

// count DEPARTMENTs
export const countDepartments = (count) => {
  return {
    type: COUNT_DEPARTMENTS,
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

// delete DEPARTMENT
export const deleteDepartment = (data) => {
  return {
    type: DELETE_DEPARTMENT,
    payload: data
  }
}

// DEPARTMENT delete success
export const deleteDepartmentSuccess = data => {
  return {
    type: DELETE_DEPARTMENT_SUCCESS,
    payload: {
      data
    }
  }
}

// DEPARTMENT delete failture
export const deleteDepartmentFailure = error => {
  return {
    type: DELETE_DEPARTMENT_FAILURE,
    payload: {
      error
    }
  }
}