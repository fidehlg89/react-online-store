import {
    GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORY_FAILURE, COUNT_CATEGORIES,
    DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, MESSAGE
} from "../actions/actionTypes";

// define initial state of CATEGORY
const initialState = {
    category: null
}

// update store based on type and payload and return the state
export default function common(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state
            }
        case GET_CATEGORY_SUCCESS:
            const { item } = action.payload
            return {
                ...state,
                item
            }
        case GET_CATEGORIES:
            return {
                ...state
            }
        case GET_CATEGORIES_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                data
            }
        case GET_CATEGORY_FAILURE:
            const { error } = action.payload
            return {
                ...state,
                error
            }
        case COUNT_CATEGORIES:
            const { count } = action.payload
            return {
                ...state,
                count
            }
        case DELETE_CATEGORY:
            return {
                ...state
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                data: action.payload.data
            }
        case DELETE_CATEGORY_FAILURE:
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