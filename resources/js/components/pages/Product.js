import React, { useState } from "react";
import { Tabs, Tab, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

function Product() {
    const [formValue, setformValue] = useState({
        productCode: '',
        productCode2: '',
        productName: '',
        productLine: '',
        productScale: '',
        productVendor: '',
        productDescription: '',
        quantityInStock: '',
        buyPrice: '',
        MSRP: ''
    })

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmitRead = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("productCode", formValue.productCode)
        axios.post("http://localhost/Classic-Models/public/product_index",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Headers': '*'
                }
            }
        ).then(response => {
            console.log('response:');
            console.log(response);
            setformValue(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const handleSubmitCreate = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("productCode", formValue.productCode)
        formData.append("productName", formValue.productName)
        formData.append("productLine", formValue.productLine)
        formData.append("productScale", formValue.productScale)
        formData.append("productVendor", formValue.productVendor)
        formData.append("productDescription", formValue.productDescription)
        formData.append("quantityInStock", formValue.quantityInStock)
        formData.append("buyPrice", formValue.buyPrice)
        formData.append("MSRP", formValue.MSRP)
        axios.post("http://localhost/Classic-Models/public/product_create",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Headers': '*'
                }
            }
        ).then(response => {
            console.log('response:');
            console.log(response);

        }).catch(error => {
            console.log(error);
        });
    };

    const handleSubmitUpdate = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("productCode", formValue.productCode)
        formData.append("productCode2", formValue.productCode2)
        formData.append("productName", formValue.productName)
        formData.append("productLine", formValue.productLine)
        formData.append("productScale", formValue.productScale)
        formData.append("productVendor", formValue.productVendor)
        formData.append("productDescription", formValue.productDescription)
        formData.append("quantityInStock", formValue.quantityInStock)
        formData.append("buyPrice", formValue.buyPrice)
        formData.append("MSRP", formValue.MSRP)
        axios.post("http://localhost/Classic-Models/public/product_update",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Headers': '*'
                }
            }
        ).then(response => {
            console.log('response:');
            console.log(response);

        }).catch(error => {
            console.log(error);
        });
    };

    const handleSubmitDelete = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("productCode", formValue.productCode)
        axios.post("http://localhost/Classic-Models/public/product_delete",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Headers': '*'
                }
            }
        ).then(response => {
            console.log('response:');
            console.log(response);
            setformValue(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-3">
                <div className="col-md-8">
                    <h2>Product Page</h2>
                    <Tabs defaultActiveKey="Read" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Create" title="Create">
                            <Form onSubmit={handleSubmitCreate}>
                                <Form.Group className="mb-3" controlId="formProductCode">
                                    <Form.Label>Product Code</Form.Label>
                                    <Form.Control
                                        name="productCode"
                                        type="text"
                                        placeholder="Enter Product Code"
                                        value={formValue.productCode}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        name="productName"
                                        type="text"
                                        placeholder="Enter Product Name"
                                        value={formValue.productName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductLine">
                                    <Form.Label>Product Line</Form.Label>
                                    <Form.Control
                                        name="productLine"
                                        type="text"
                                        placeholder="Enter Product Line"
                                        value={formValue.productLine}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductScale">
                                    <Form.Label>Product Scale</Form.Label>
                                    <Form.Control
                                        name="productScale"
                                        type="text"
                                        placeholder="Enter Product Scale '1:10...'"
                                        value={formValue.productScale}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductDescription">
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control
                                        name="productDescription"
                                        type="text"
                                        placeholder="Enter Product Description"
                                        value={formValue.productDescription}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formQuantityInStock">
                                    <Form.Label>Quantity In Stock</Form.Label>
                                    <Form.Control
                                        name="quantityInStock"
                                        type="text"
                                        placeholder="Enter the Quantity In Stock"
                                        value={formValue.quantityInStock}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBuyPrice">
                                    <Form.Label>Buy Price</Form.Label>
                                    <Form.Control
                                        name="buyPrice"
                                        type="text"
                                        placeholder="Enter Buy Price"
                                        value={formValue.buyPrice}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMSRP">
                                    <Form.Label>MSRP</Form.Label>
                                    <Form.Control
                                        name="MSRP"
                                        type="text"
                                        placeholder="Enter MSRP"
                                        value={formValue.MSRP}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Tab>



                        <Tab eventKey="Read" title="Read">
                            <Form onSubmit={handleSubmitRead}>
                                <Form.Group className="mb-3" controlId="formProductCode">
                                    <Form.Label>Product Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Product Code"
                                        name="productCode"
                                        value={formValue.productCode}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                            <ListGroup gap={3}>
                                <ListGroup.Item>Product Code: {formValue.productCode}</ListGroup.Item>
                                <ListGroup.Item>Product Name: {formValue.productName}</ListGroup.Item>
                                <ListGroup.Item>Product Line: {formValue.productLine}</ListGroup.Item>
                                <ListGroup.Item>Product Scale: {formValue.productScale}</ListGroup.Item>
                                <ListGroup.Item>Product Vendor: {formValue.productVendor}</ListGroup.Item>
                                <ListGroup.Item>Product Description: {formValue.productDescription}</ListGroup.Item>
                                <ListGroup.Item>Quantity In Stock: {formValue.quantityInStock}</ListGroup.Item>
                                <ListGroup.Item>Buy Price: {formValue.buyPrice}</ListGroup.Item>
                                <ListGroup.Item>MSRP: {formValue.MSRP}</ListGroup.Item>
                            </ListGroup>
                        </Tab>



                        <Tab eventKey="Update" title="Update">
                            <Form onSubmit={handleSubmitUpdate}>
                                <Form.Group className="mb-3" controlId="formProductCode">
                                    <Form.Label>Product Code</Form.Label>
                                    <Form.Control
                                        name="productCode"
                                        type="text"
                                        placeholder="Enter Product Code"
                                        value={formValue.productCode}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductCode2">
                                    <Form.Label>New Product Code</Form.Label>
                                    <Form.Control
                                        name="productCode2"
                                        type="text"
                                        placeholder="Enter new Product Code"
                                        value={formValue.productCode2}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        name="productName"
                                        type="text"
                                        placeholder="Enter Product Name"
                                        value={formValue.productName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductLine">
                                    <Form.Label>Product Line</Form.Label>
                                    <Form.Control
                                        name="productLine"
                                        type="text"
                                        placeholder="Enter Product Line"
                                        value={formValue.productLine}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductScale">
                                    <Form.Label>Product Scale</Form.Label>
                                    <Form.Control
                                        name="productScale"
                                        type="text"
                                        placeholder="Enter Product Scale '1:10...'"
                                        value={formValue.productScale}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formProductDescription">
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control
                                        name="productDescription"
                                        type="text"
                                        placeholder="Enter Product Description"
                                        value={formValue.productDescription}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formQuantityInStock">
                                    <Form.Label>Quantity In Stock</Form.Label>
                                    <Form.Control
                                        name="quantityInStock"
                                        type="text"
                                        placeholder="Enter the Quantity In Stock"
                                        value={formValue.quantityInStock}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBuyPrice">
                                    <Form.Label>Buy Price</Form.Label>
                                    <Form.Control
                                        name="buyPrice"
                                        type="text"
                                        placeholder="Enter Buy Price"
                                        value={formValue.buyPrice}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMSRP">
                                    <Form.Label>MSRP</Form.Label>
                                    <Form.Control
                                        name="MSRP"
                                        type="text"
                                        placeholder="Enter MSRP"
                                        value={formValue.MSRP}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Delete" title="Delete">
                            <Form onSubmit={handleSubmitDelete}>
                                <Form.Group className="mb-3" controlId="formProductCode">
                                    <Form.Label>Product Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Product Code"
                                        name="productCode"
                                        value={formValue.productCode}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
export default Product;