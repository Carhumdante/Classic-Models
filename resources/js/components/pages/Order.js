import React, { useState } from "react";
import { Tabs, Tab, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

function Order() {
    const [formValue, setformValue] = useState({
        orderNumber: '',
        orderNumber2: '',
        orderDate: '',
        requiredDate: '',
        shippedDate: '',
        status: '',
        comments: '',
        customerNumber: ''
    })

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmitRead = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("orderNumber", formValue.orderNumber)
        axios.post("http://localhost/Classic-Models/public/order_index",
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
        formData.append("orderNumber", formValue.orderNumber)
        formData.append("orderDate", formValue.orderDate)
        formData.append("requiredDate", formValue.requiredDate)
        formData.append("shippedDate", formValue.shippedDate)
        formData.append("status", formValue.status)
        formData.append("comments", formValue.comments)
        formData.append("customerNumber", formValue.customerNumber)
        axios.post("http://localhost/Classic-Models/public/order_create",
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
        formData.append("orderNumber", formValue.orderNumber)
        formData.append("orderNumber2", formValue.orderNumber2)
        formData.append("orderDate", formValue.orderDate)
        formData.append("requiredDate", formValue.requiredDate)
        formData.append("shippedDate", formValue.shippedDate)
        formData.append("status", formValue.status)
        formData.append("comments", formValue.comments)
        formData.append("customerNumber", formValue.customerNumber)
        axios.post("http://localhost/Classic-Models/public/order_update",
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
        formData.append("orderNumber", formValue.orderNumber)
        axios.post("http://localhost/Classic-Models/public/order_delete",
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
                    <h2>Order Page</h2>
                    <Tabs defaultActiveKey="Read" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Create" title="Create">
                            <Form onSubmit={handleSubmitCreate}>
                                <Form.Group className="mb-3" controlId="formorderNumber">
                                    <Form.Label>Order Number</Form.Label>
                                    <Form.Control
                                        name="orderNumber"
                                        type="text"
                                        placeholder="Enter Order Number"
                                        value={formValue.orderNumber}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formorderDate">
                                    <Form.Label>Order Date</Form.Label>
                                    <Form.Control
                                        name="orderDate"
                                        type="text"
                                        placeholder="Enter Order Date"
                                        value={formValue.orderDate}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formrequiredDate">
                                    <Form.Label>Required Date</Form.Label>
                                    <Form.Control
                                        name="requiredDate"
                                        type="text"
                                        placeholder="Enter Required Date"
                                        value={formValue.requiredDate}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formshippedDate">
                                    <Form.Label>Shipped Date</Form.Label>
                                    <Form.Control
                                        name="shippedDate"
                                        type="text"
                                        placeholder="Enter Shipped Date '1:10...'"
                                        value={formValue.shippedDate}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formstatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control
                                        name="status"
                                        type="text"
                                        placeholder="Enter Shipped Date '1:10...'"
                                        value={formValue.status}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcomments">
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control
                                        name="comments"
                                        type="text"
                                        placeholder="Enter Comments"
                                        value={formValue.comments}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcustomerNumber">
                                    <Form.Label>Costumer Number</Form.Label>
                                    <Form.Control
                                        name="customerNumber"
                                        type="text"
                                        placeholder="Enter the Costumer Number"
                                        value={formValue.customerNumber}
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
                                <Form.Group className="mb-3" controlId="formorderNumber">
                                    <Form.Label>Order Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Order Number"
                                        name="orderNumber"
                                        value={formValue.orderNumber}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                            <ListGroup gap={3}>
                                <ListGroup.Item>Order Number: {formValue.orderNumber}</ListGroup.Item>
                                <ListGroup.Item>Order Date: {formValue.orderDate}</ListGroup.Item>
                                <ListGroup.Item>Required Date: {formValue.requiredDate}</ListGroup.Item>
                                <ListGroup.Item>Shipped Date: {formValue.shippedDate}</ListGroup.Item>
                                <ListGroup.Item>Status: {formValue.status}</ListGroup.Item>
                                <ListGroup.Item>Comments: {formValue.comments}</ListGroup.Item>
                                <ListGroup.Item>Costumer Number: {formValue.customerNumber}</ListGroup.Item>
                            </ListGroup>
                        </Tab>






                        <Tab eventKey="Update" title="Update">
                            <Form onSubmit={handleSubmitUpdate}>
                                <Form.Group className="mb-3" controlId="formorderNumber">
                                    <Form.Label>Order Number</Form.Label>
                                    <Form.Control
                                        name="orderNumber"
                                        type="text"
                                        placeholder="Enter Order Number"
                                        value={formValue.orderNumber}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formorderNumber2">
                                    <Form.Label>New Order Number</Form.Label>
                                    <Form.Control
                                        name="orderNumber2"
                                        type="text"
                                        placeholder="Enter new Order Number"
                                        value={formValue.orderNumber2}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formorderDate">
                                    <Form.Label>Order Date</Form.Label>
                                    <Form.Control
                                        name="orderDate"
                                        type="text"
                                        placeholder="Enter Order Date"
                                        value={formValue.orderDate}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formrequiredDate">
                                    <Form.Label>Required Date</Form.Label>
                                    <Form.Control
                                        name="requiredDate"
                                        type="text"
                                        placeholder="Enter Required Date"
                                        value={formValue.requiredDate}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formshippedDate">
                                    <Form.Label>Shipped Date</Form.Label>
                                    <Form.Control
                                        name="shippedDate"
                                        type="text"
                                        placeholder="Enter Shipped Date"
                                        value={formValue.shippedDate}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcomments">
                                    <Form.Label>Comments</Form.Label>
                                    <Form.Control
                                        name="comments"
                                        type="text"
                                        placeholder="Enter Comments"
                                        value={formValue.comments}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formstatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control
                                        name="status"
                                        type="text"
                                        placeholder="Enter Shipped Date"
                                        value={formValue.status}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcustomerNumber">
                                    <Form.Label>Customer Number</Form.Label>
                                    <Form.Control
                                        name="customerNumber"
                                        type="text"
                                        placeholder="Enter the Custumer Number"
                                        value={formValue.customerNumber}
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
                                <Form.Group className="mb-3" controlId="formorderNumber">
                                    <Form.Label>Order Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Order Number"
                                        name="orderNumber"
                                        value={formValue.orderNumber}
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
export default Order;
