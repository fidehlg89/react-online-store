import { useEffect } from "react";
import ProductList from "./productlist";
import { connect } from "react-redux";
import {
  getProductsAsync,
  updateProductAsync,
  deleteProductAsync,
} from "../../redux/actions/asyncActions/productAsync";

const Product = ({ products, productsData, deleteProduct }) => {
  
  useEffect(() => {
    productsData();
  }, [productsData]);

  return (
    <div>
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  productsData: () => dispatch(getProductsAsync()),
  deleteProduct: (item) => dispatch(deleteProductAsync(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
