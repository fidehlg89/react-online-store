import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getDepartmentAsync,
  updateDepartmentAsync,
} from "../../redux/actions/asyncActions/departmentAsync";
import DepartmentForm from "../../components/elements/forms/departmentform";

const DepartmentUpdate = ({ department, getDepartment }) => {
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getDepartment(id);
  }, [id]);

  return (
    <>
      {department != null ? <DepartmentForm department={department} /> : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    department: state.departments.item,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getDepartment: (id) => dispatch(getDepartmentAsync(id)),
  updateDepartment: (item) => dispatch(updateDepartmentAsync(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentUpdate);
