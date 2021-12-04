import { useEffect } from "react"
import { connect } from 'react-redux'
import { getDepartmentsAsync } from "./../../redux/actions/asyncActions/departmentAsync"
import { getCategoriesAsync } from "./../../redux/actions/asyncActions/categoryAsync"
import ProductForm from "../../components/elements/forms/productform"

const ProductCreate = ({ departments, departmentsData, categories, categoriesData }) => {

    useEffect(() => {
        departmentsData();
        categoriesData();
    }, [departmentsData, categoriesData]);

    return (
        <div>
            {
                departments != null ? <ProductForm products={departments} categories={categories} /> : null
            }
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.data,
        departments: state.departments.data
    }
}

const mapDispatchToProps = (dispatch) => ({
    departmentsData: () => dispatch(getDepartmentsAsync()),
    categoriesData: () => dispatch(getCategoriesAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate);