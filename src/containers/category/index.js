import { useEffect } from "react";
import CategoryList from "./categorylist";
import { connect } from "react-redux";
import {
  getCategoriesAsync,
  deleteCategoryAsync,
} from "../../redux/actions/asyncActions/categoryAsync";

const Category = ({ categories, categoriesData, deleteCategory }) => {
  useEffect(() => {
    categoriesData();
  }, [categoriesData]);

  return <CategoryList categories={categories} onDelete={deleteCategory} />;
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  categoriesData: () => dispatch(getCategoriesAsync()),
  deleteCategory: (item) => dispatch(deleteCategoryAsync(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
