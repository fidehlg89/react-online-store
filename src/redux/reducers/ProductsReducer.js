import {
    GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAILURE, COUNT_PRODUCTS,
    DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, MESSAGE
} from "../actions/actionTypes";

// define initial state of PRODUCT
const initialState = {
    product: null
}

// update store based on type and payload and return the state
export default function common(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state
            }
        case GET_PRODUCT_SUCCESS:
            const { item } = action.payload
            return {
                ...state,
                item
            }
        case GET_PRODUCTS:
            return {
                ...state
            }
        case GET_PRODUCTS_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                data
            }
        case GET_PRODUCT_FAILURE:
            const { error } = action.payload
            return {
                ...state,
                error
            }
        case COUNT_PRODUCTS:
            const { count } = action.payload
            return {
                ...state,
                count
            }
        case DELETE_PRODUCT:
            return {
                ...state
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload.data
            }
        case DELETE_PRODUCT_FAILURE:
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