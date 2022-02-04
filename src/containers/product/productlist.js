//import { styled } from "./../../components/common"
import ProductTable from "../../components/elements/table/producttable";

const ProductList = ({ products, onDelete }) => {
  
  return (
    <ProductTable products={products} onDelete={onDelete} />
  );
};

export default ProductList;
