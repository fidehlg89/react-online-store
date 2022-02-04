import {
  CardContent,
  CardContentWrapper,
  CardWidgetHeading,
  CardWidgetSubHeading,
  CardWidgetPrice,
} from "../../components/common/styles";
import { Container, Row, Col, CardTitle } from "reactstrap";
import { getProductsAsync } from "../../redux/actions/asyncActions/productAsync";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getDepartmentsAsync } from "../../redux/actions/asyncActions/departmentAsync";

const Home = ({ products, productsData, departments, departmentsData }) => {
  useEffect(() => {
    productsData();
    departmentsData();
  }, [productsData, departmentsData]);

  return (
    <Container>
      <Row>
        {products != null && products.length > 0
          ? products.map((element, index) => (
              <Col lg="5" md="4" key={index}>
                <CardContent>
                  <CardContentWrapper>
                    <div>
                      <CardWidgetHeading>{element.name}</CardWidgetHeading>
                      <CardWidgetSubHeading>
                        {departments != null && departments.length > 0
                          ? departments[element.department - 1].name
                          : null}
                      </CardWidgetSubHeading>
                    </div>
                    <CardWidgetPrice>
                      <span>{element.cost}</span>
                    </CardWidgetPrice>
                  </CardContentWrapper>
                </CardContent>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    departments: state.departments.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  departmentsData: () => dispatch(getDepartmentsAsync()),
  productsData: () => dispatch(getProductsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
