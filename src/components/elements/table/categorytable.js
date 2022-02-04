import { Table, ButtonGroup, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const table_head = ["#", "Name", "Department", "Actions"];

const CategoryTable = ({ categories, onDelete }) => {
  let navigate = useNavigate();

  const onEdit = (id) => {
    navigate("/categories/update/" + id);
  };

  return (
    <Table hover>
      <thead>
        <tr>
          {table_head.map((item, index) => {
            return <td key={index}>{item}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {categories != null && categories.length > 0
          ? categories.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td></td>
                <td>
                  <ButtonGroup>
                    <Button onClick={() => onEdit(item.id)}>
                      <i className="pe-7s-pen" />
                    </Button>
                    <span className="bp3-divider"></span>
                    <Button onClick={() => onDelete(item)}>
                      <i className="pe-7s-trash" />
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </Table>
  );
};

export default CategoryTable;
