import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import {
  createCategoryAsync,
  updateCategoryAsync,
} from "../../../redux/actions/asyncActions/categoryAsync";
import { getDepartmentsAsync } from "../../../redux/actions/asyncActions/departmentAsync";

const CategoryForm = ({ category, departments, departmentsData, createCategory, updateCategory }) => {
  let navigate = useNavigate();
  const [categoryItem, setCategory] = useState({
    name: "",
    department: "",
  });
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (category != null) {
      setCategory(category);
      setEditing(true);
    }
  }, [category]);

  useEffect(() => {
    departmentsData();
  }, [departmentsData]);

  const onChange = (e) => {
    e.preventDefault();
    setCategory({
      ...categoryItem,
      [e.target.name]: e.target.value,
    });
  };

  const changeDepartment = (e) => {
    e.preventDefault();    
    setCategory({
       ...categoryItem,
      [e.target.name]: e.target.value,
     });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateCategory(categoryItem);
    } else await createCategory(categoryItem);
    navigate("/categories");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="product-name" sm={2}>
          Name
        </Label>
        <Col sm={8}>
          <Input
            type="text"
            name="name"
            id="category-name"
            placeholder="Category name"
            value={categoryItem.name}
            onChange={onChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="category-department" sm={2}>
          Select Department
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="department"
            id="category-department"
            value={categoryItem.department}
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

      <FormGroup check row>
        <Col sm={{ size: 8, offset: 2 }}>
          <Button>Save</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    departments: state.departments.data,
    categories: state.categories.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createCategory: (item) => dispatch(createCategoryAsync(item)),
  departmentsData: () => dispatch(getDepartmentsAsync()),
  updateCategory: (item) => dispatch(updateCategoryAsync(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
