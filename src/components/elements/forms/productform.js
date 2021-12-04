import { useState } from 'react';
import {
    Col, Button, Form, FormGroup, Label, Input
} from 'reactstrap';

const ProductForm = ({ products, categories }) => {

    const [categoriesList, setCategories] = useState([])

    const changeDepartment = (e) => {
        e.preventDefault();
        setCategories(categories.filter(category => category.department === e.target.value));
    }

    return (
        <Form>
            <FormGroup row>
                <Label for="product-name" sm={2}>Name</Label>
                <Col sm={10}>
                    <Input type="text" name="product-name" id="product-name"
                        placeholder="Introduce a Product name" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="product-price" sm={2}>Price</Label>
                <Col sm={10}>
                    <Input type="text" name="product-price" id="product-price"
                        placeholder="Insert the product price" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="product-department" sm={2}>Select Department</Label>
                <Col sm={10}>
                    <Input type="select" name="product-department" id="product-department" onChange={changeDepartment}>
                        {products.map((element, index) => (
                            <option key={index} value={element.id}>{element.name}</option>
                        )
                        )}
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="product-category" sm={2}>Select Category</Label>
                <Col sm={10}>
                    <Input type="select" name="product-category" id="product-category" >
                        {categoriesList.map((element, index) => (
                            <option key={index} value={element.id}>{element.name}</option>
                        )
                        )}
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    )
}


export default ProductForm