import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCategoryAsync,
  updateCategoryAsync,
} from "../../redux/actions/asyncActions/categoryAsync";
import CategoryForm from "../../components/elements/forms/categoryform";

const CategoryUpdate = ({ category, getCategory }) => {
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getCategory(id);
  }, [id]);

  return <>{category != null ? <CategoryForm category={category} /> : null}</>;
};

const mapStateToProps = (state) => {
  return {
    category: state.categories.item,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCategory: (id) => dispatch(getCategoryAsync(id)),
  updateCategory: (item) => dispatch(updateCategoryAsync(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryUpdate);
