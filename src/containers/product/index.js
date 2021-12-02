import { useEffect } from "react";
import ProductList from "./productlist";
import { connect } from 'react-redux';
import { getProductsAsync } from '../../redux/actions/asyncActions/productAsync';

const Product = ({ products, productsData }) => {

    useEffect(() => {
        productsData();
    }, [productsData]);

    return (
        <div>
            {
                products != null ?
                    <ProductList products={products} />
                    : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data
    }
}

const mapDispatchToProps = (dispatch) => ({
    productsData: () => dispatch(getProductsAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)