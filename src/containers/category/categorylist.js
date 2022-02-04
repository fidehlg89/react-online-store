//import { styled } from "./../../components/common"
import CategoryTable from "../../components/elements/table/categorytable";

const CategoryList = ({ categories, onDelete }) => {
  return <CategoryTable categories={categories} onDelete={onDelete} />;
};

export default CategoryList;
