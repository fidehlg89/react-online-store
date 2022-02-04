//import { styled } from "./../../components/common"
import DepartmentTable from "../../components/elements/table/departmenttable";

const ProductList = ({ departments, onDelete }) => {
  return <DepartmentTable departments={departments} onDelete={onDelete} />;
};

export default ProductList;
