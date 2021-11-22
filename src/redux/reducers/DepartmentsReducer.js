import {
    GET_DEPARTMENT, GET_DEPARTMENT_SUCCESS, GET_DEPARTMENTS, GET_DEPARTMENTS_SUCCESS, GET_DEPARTMENT_FAILURE, COUNT_DEPARTMENTS,
    DELETE_DEPARTMENT, DELETE_DEPARTMENT_SUCCESS, DELETE_DEPARTMENT_FAILURE, MESSAGE
} from "../actions/actionTypes";

// define initial state of DEPARTMENT
const initialState = {
    department: null
}

// update store based on type and payload and return the state
export default function common(state = initialState, action) {
    switch (action.type) {
        case GET_DEPARTMENT:
            return {
                ...state
            }
        case GET_DEPARTMENT_SUCCESS:
            const { item } = action.payload
            return {
                ...state,
                item
            }
        case GET_DEPARTMENTS:
            return {
                ...state
            }
        case GET_DEPARTMENTS_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                data
            }
        case GET_DEPARTMENT_FAILURE:
            const { error } = action.payload
            return {
                ...state,
                error
            }
        case COUNT_DEPARTMENTS:
            const { count } = action.payload
            return {
                ...state,
                count
            }
        case DELETE_DEPARTMENT:
            return {
                ...state
            }
        case DELETE_DEPARTMENT_SUCCESS:
            return {
                ...state,
                data: action.payload.data
            }
        case DELETE_DEPARTMENT_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case MESSAGE:
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state
    }
}