import React, { useState } from "react";
import { Tabs, Tab, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';


function Customer() {
    const [formValue, setformValue] = useState({
        customerNumber: '',
        customerNumber2: '',
        customerName: '',
        contactLastName: '',
        contactFirstName: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        salesRepEmployeeNumber: '',
        creditLimit:''
    })

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmitRead = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("customerNumber", formValue.customerNumber)
        axios.post("http://localhost/Classic-Models/public/customers_index",
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
        formData.append("customerNumber", formValue.customerNumber)
        formData.append("customerName", formValue.customerName)
        formData.append("contactLastName", formValue.contactLastName)
        formData.append("contactFirstName", formValue.contactFirstName)
        formData.append("phone", formValue.phone)
        formData.append("addressLine1", formValue.addressLine1)
        formData.append("addressLine2", formValue.addressLine2)
        formData.append("city", formValue.city)
        formData.append("state", formValue.state)

        formData.append("postalCode", formValue.postalCode)
        formData.append("country", formValue.country)
        formData.append("salesRepEmployeeNumber", formValue.salesRepEmployeeNumber)
        formData.append("creditLimit", formValue.creditLimit)
        axios.post("http://localhost/Classic-Models/public/customers_create",
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
        formData.append("customerNumber", formValue.customerNumber)
        formData.append("customerNumber2", formValue.customerNumber2)
        formData.append("customerName", formValue.customerName)
        formData.append("contactLastName", formValue.contactLastName)
        formData.append("contactFirstName", formValue.contactFirstName)
        formData.append("phone", formValue.phone)
        formData.append("addressLine1", formValue.addressLine1)
        formData.append("addressLine2", formValue.addressLine2)
        formData.append("city", formValue.city)
        formData.append("state", formValue.state)
        formData.append("postalCode", formValue.postalCode)
        formData.append("country", formValue.country)
        formData.append("salesRepEmployeeNumber", formValue.salesRepEmployeeNumber)
        formData.append("creditLimit", formValue.creditLimit)
        axios.post("http://localhost/Classic-Models/public/customers_update",
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
        formData.append("customerNumber", formValue.customerNumber)
        axios.post("http://localhost/Classic-Models/public/customers_delete",
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
                    <h2>Customers Page</h2>
                    <Tabs defaultActiveKey="Read" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Create" title="Create">
                            <Form onSubmit={handleSubmitCreate}>
                                <Form.Group className="mb-3" controlId="formcustomerNumber">
                                    <Form.Label>Customer Number</Form.Label>
                                    <Form.Control
                                        name="customerNumber"
                                        type="text"
                                        placeholder="Enter Customer Number"
                                        value={formValue.customerNumber}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcustomerName">
                                    <Form.Label>Customer Name</Form.Label>
                                    <Form.Control
                                        name="customerName"
                                        type="text"
                                        placeholder="Enter Customer Name"
                                        value={formValue.customerName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcontactLastName">
                                    <Form.Label>Contact Last Name</Form.Label>
                                    <Form.Control
                                        name="contactLastName"
                                        type="text"
                                        placeholder="Enter Contact Last Name"
                                        value={formValue.contactLastName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcontactFirstName">
                                    <Form.Label>Contact First Name</Form.Label>
                                    <Form.Control
                                        name="contactFirstName"
                                        type="text"
                                        placeholder="Enter Contact First Name"
                                        value={formValue.contactFirstName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formphone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        type="text"
                                        placeholder="Enter Phone'"
                                        value={formValue.phone}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formaddressLine1">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control
                                        name="addressLine1"
                                        type="text"
                                        placeholder="Enter Address Line 1"
                                        value={formValue.addressLine1}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formaddressLine2">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control
                                        name="addressLine2"
                                        type="text"
                                        placeholder="Enter the Address Line 2"
                                        value={formValue.addressLine2}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        name="city"
                                        type="text"
                                        placeholder="Enter City"
                                        value={formValue.city}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formstate">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        name="state"
                                        type="text"
                                        placeholder="Enter State"
                                        value={formValue.state}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formpostalCode">
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control
                                        name="postalCode"
                                        type="text"
                                        placeholder="Enter Postal Code"
                                        value={formValue.postalCode}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formcountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        name="country"
                                        type="text"
                                        placeholder="Enter Country"
                                        value={formValue.country}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formsalesRepEmployeNumber">
                                    <Form.Label>Sales Rep Employee Number</Form.Label>
                                    <Form.Control
                                        name="salesRepEmployeeNumber"
                                        type="text"
                                        placeholder="Enter Sales Rep Employee Number"
                                        value={formValue.salesRepEmployeeNumber}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formcreditLimit">
                                    <Form.Label>Credit Limit</Form.Label>
                                    <Form.Control
                                        name="creditLimit"
                                        type="text"
                                        placeholder="Enter Credit Limit"
                                        value={formValue.creditLimit}
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
                                <Form.Group className="mb-3" controlId="formcustomerNumber">
                                    <Form.Label>Customer Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Customer Number"
                                        name="customerNumber"
                                        value={formValue.customerNumber}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                            <ListGroup gap={3}>
                                <ListGroup.Item>Customer Number: {formValue.customerNumber}</ListGroup.Item>
                                <ListGroup.Item>Customer Name: {formValue.customerName}</ListGroup.Item>
                                <ListGroup.Item>Contact Last Name: {formValue.contactLastName}</ListGroup.Item>
                                <ListGroup.Item>Contact First Name: {formValue.contactFirstName}</ListGroup.Item>
                                <ListGroup.Item>Phone: {formValue.phone}</ListGroup.Item>
                                <ListGroup.Item>Address Line 1: {formValue.addressLine1}</ListGroup.Item>
                                <ListGroup.Item>Address Line 2: {formValue.addressLine2}</ListGroup.Item>
                                <ListGroup.Item>City: {formValue.city}</ListGroup.Item>
                                <ListGroup.Item>State: {formValue.state}</ListGroup.Item>
                                <ListGroup.Item>Postal Code: {formValue.postalCode}</ListGroup.Item>
                                <ListGroup.Item>Country: {formValue.country}</ListGroup.Item>
                                <ListGroup.Item>Sales Rep Employee Number: {formValue.salesRepEmployeeNumber}</ListGroup.Item>
                                <ListGroup.Item>CreditLimit: {formValue.creditLimit}</ListGroup.Item>
                            </ListGroup>
                        </Tab>



                        <Tab eventKey="Update" title="Update">
                            <Form onSubmit={handleSubmitUpdate}>
                                <Form.Group className="mb-3" controlId="formcustomerNumber">
                                    <Form.Label>Customer Number</Form.Label>
                                    <Form.Control
                                        name="customerNumber"
                                        type="text"
                                        placeholder="Enter Customer Number"
                                        value={formValue.customerNumber}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcustomerNumber2">
                                    <Form.Label>New Customer Number</Form.Label>
                                    <Form.Control
                                        name="customerNumber2"
                                        type="text"
                                        placeholder="Enter new Customer Number"
                                        value={formValue.customerNumber2}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcustomerName">
                                    <Form.Label>Customer Name</Form.Label>
                                    <Form.Control
                                        name="customerName"
                                        type="text"
                                        placeholder="Enter Customer Name"
                                        value={formValue.customerName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcontactLastName">
                                    <Form.Label>Contact Last Name</Form.Label>
                                    <Form.Control
                                        name="contactLastName"
                                        type="text"
                                        placeholder="Enter Contact Last Name"
                                        value={formValue.contactLastName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcontactFirstName">
                                    <Form.Label>Contact First Name</Form.Label>
                                    <Form.Control
                                        name="contactFirstName"
                                        type="text"
                                        placeholder="Enter Contact First Name"
                                        value={formValue.contactFirstName}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formphone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        type="text"
                                        placeholder="Enter Phone'"
                                        value={formValue.phone}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formaddressLine1">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control
                                        name="addressLine1"
                                        type="text"
                                        placeholder="Enter Address Line 1"
                                        value={formValue.addressLine1}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formaddressLine2">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control
                                        name="addressLine2"
                                        type="text"
                                        placeholder="Enter the Address Line 2"
                                        value={formValue.addressLine2}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formcity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        name="city"
                                        type="text"
                                        placeholder="Enter City"
                                        value={formValue.city}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formstate">
                                    <Form.Label>state</Form.Label>
                                    <Form.Control
                                        name="state"
                                        type="text"
                                        placeholder="Enter state"
                                        value={formValue.state}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formpostalCode">
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control
                                        name="postalCode"
                                        type="text"
                                        placeholder="Enter Postal Code"
                                        value={formValue.postalCode}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formcountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        name="country"
                                        type="text"
                                        placeholder="Enter Country"
                                        value={formValue.country}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formsalesRepEmployeNumber">
                                    <Form.Label>Sales Rep Employee Number</Form.Label>
                                    <Form.Control
                                        name="salesRepEmployeeNumber"
                                        type="text"
                                        placeholder="Enter Sales Rep Employee Number"
                                        value={formValue.salesRepEmployeeNumber}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formcreditLimit">
                                    <Form.Label>Credit Limit</Form.Label>
                                    <Form.Control
                                        name="creditLimit"
                                        type="text"
                                        placeholder="Enter Credit Limit"
                                        value={formValue.creditLimit}
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
                                <Form.Group className="mb-3" controlId="formcustomerNumber">
                                    <Form.Label>Customer Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Customer Number"
                                        name="customerNumber"
                                        value={formValue.customerNumber}
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

export default Customer;