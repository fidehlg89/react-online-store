import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import {
  createDepartmentAsync,
  updateDepartmentAsync,
} from "../../../redux/actions/asyncActions/departmentAsync";

const DepartmentForm = ({ department, createDepartment, updateDepartment }) => {
  let navigate = useNavigate();
  const [departmentItem, setDepartment] = useState({
    name: "",
  });
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (department != null) {
      setDepartment(department);
      setEditing(true);
    }
  }, [department]);

  const onChange = (e) => {
    e.preventDefault();
    setDepartment({
      ...departmentItem,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateDepartment(departmentItem);
    } else await createDepartment(departmentItem);
    navigate("/departments");
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
            id="department-name"
            placeholder="Department name"
            value={departmentItem.name}
            onChange={onChange}
          />
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
    departments: state.departments.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createDepartment: (item) => dispatch(createDepartmentAsync(item)),
  updateDepartment: (item) => dispatch(updateDepartmentAsync(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentForm);
