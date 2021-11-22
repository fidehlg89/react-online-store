import { combineReducers } from 'redux';
import products from './ProductsReducer';
import departments from './DepartmentsReducer';
import categories from './CategoriesReducer';

// to combine all reducers together
const appReducer = combineReducers({
    products, departments, categories
});

export default appReducer;