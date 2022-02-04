import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProductAsync,
  updateProductAsync,
} from "../../redux/actions/asyncActions/productAsync";
import ProductForm from "../../components/elements/forms/productform";

const ProductUpdate = ({ product, getProduct }) => {
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <>{product != null ? <ProductForm product={product} /> : null}</>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products.item,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id) => dispatch(getProductAsync(id)),
  updateProduct: (item) => dispatch(updateProductAsync(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductUpdate);
