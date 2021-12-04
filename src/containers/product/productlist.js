//import { styled } from "./../../components/common"
import Product from "./../../components/product"

import { Row, Col } from "reactstrap"

const ProductList = ({ products }) => {
    return (
        <Row>
            {
                products.length > 0 ? products.map((element) => {
                    return (
                        <Col md="4" key={element.id}>
                            <Product product={element} />
                        </Col>
                    )
                }
                ) : null
            }
        </Row>
    )
}

export default ProductList