import { useEffect } from "react";
import DepartmentList from "./departmentlist";
import { connect } from "react-redux";
import {
  getDepartmentsAsync,
  updateDepartmentsAsync,
  deleteDepartmentAsync,
} from "../../redux/actions/asyncActions/departmentAsync";

const Department = ({ departments, departmentsData, deleteDepartment }) => {
  
  useEffect(() => {
    departmentsData();
  }, [departmentsData]);

  return (
    <div>
      <DepartmentList departments={departments} onDelete={deleteDepartment} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    departments: state.departments.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  departmentsData: () => dispatch(getDepartmentsAsync()),
  deleteDepartment: (item) => dispatch(deleteDepartmentAsync(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Department);
