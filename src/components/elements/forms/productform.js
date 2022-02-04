import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import {
  createProductAsync,
  updateProductAsync,
} from "../../../redux/actions/asyncActions/productAsync";
import { getDepartmentsAsync } from "../../../redux/actions/asyncActions/departmentAsync";
import { getCategoriesAsync } from "../../../redux/actions/asyncActions/categoryAsync";

const ProductForm = ({
  product,
  departments,
  categories,
  createProduct,
  updateProduct,
  departmentsData,
  categoriesData,
}) => {
  let navigate = useNavigate();

  const [productItem, setProduct] = useState({
    name: "",
    cost: "",
    department: "",
    category: "",
  });

  const [categoriesList, setCategories] = useState([]);

  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (categories != null) {
      if (product != null) {
        setProduct(product);
        setEditing(true);
        setCategories(
          categories.filter(
            (category) => category.department === Number(product.department)
          )
        );
      }
    }
  }, [categories]);

  useEffect(() => {
    departmentsData();
    categoriesData();
  }, [departmentsData, categoriesData]);

  const changeDepartment = (e) => {
    e.preventDefault();
    setCategories(
      categories.filter(
        (category) => category.department === Number(e.target.value)
      )
    );
    setProduct({
      ...productItem,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateProduct(productItem);
    } else await createProduct(productItem);
    navigate("/products");
  };

  const onChange = (e) => {
    e.preventDefault();
    setProduct({
      ...productItem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="product-name" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="name"
            id="product-name"
            value={productItem.name}
            placeholder="Product name"
            onChange={onChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="product-price" sm={2}>
          Price
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="cost"
            id="product-price"
            value={productItem.cost}
            placeholder="Product price"
            onChange={onChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="product-department" sm={2}>
          Select Department
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="department"
            id="product-department"
            value={productItem.department}
            onChange={changeDepartment}
          >
            <option>Select department</option>
            {departments != null && departments.length > 0
              ? departments.map((element, index) => (
                  <option key={index} value={element.id}>
                    {element.name}
                  </option>
                ))
              : null}
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="product-category" sm={2}>
          Select Category
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="category"
            id="product-category"
            value={productItem.category}
            onChange={onChange}
          >
            {categoriesList != null && categoriesList.length > 0 ? (
              categoriesList.map((element, index) => (
                <option key={index} value={element.id}>
                  {element.name}
                </option>
              ))
            ) : (
              <option>Select category</option>
            )}
          </Input>
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Save</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    departments: state.departments.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (item) => dispatch(createProductAsync(item)),
  updateProduct: (item) => dispatch(updateProductAsync(item)),
  departmentsData: () => dispatch(getDepartmentsAsync()),
  categoriesData: () => dispatch(getCategoriesAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
