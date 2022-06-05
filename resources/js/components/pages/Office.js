import React, { useState } from "react";
import { Tabs, Tab, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

function Office() {
    const [formValue, setformValue] = useState({
        officeCode: '',
        officeCode2: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        territory: ''
    })

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    }

    const handleSubmitRead = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("officeCode", formValue.officeCode)
        axios.post("http://localhost/Classic-Models/public/office_index",
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
        formData.append("officeCode", formValue.officeCode)
        formData.append("territory", formValue.territory)
        formData.append("phone", formValue.phone)
        formData.append("addressLine1", formValue.addressLine1)
        formData.append("addressLine2", formValue.addressLine2)
        formData.append("city", formValue.city)
        formData.append("state", formValue.state)
        formData.append("postalCode", formValue.postalCode)
        formData.append("country", formValue.country)
        axios.post("http://localhost/Classic-Models/public/office_create",
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
        formData.append("officeCode", formValue.officeCode)
        formData.append("officeCode2", formValue.officeCode2)
        formData.append("territory", formValue.territory)
        formData.append("phone", formValue.phone)
        formData.append("addressLine1", formValue.addressLine1)
        formData.append("addressLine2", formValue.addressLine2)
        formData.append("city", formValue.city)
        formData.append("state", formValue.state)
        formData.append("postalCode", formValue.postalCode)
        formData.append("country", formValue.country)
        axios.post("http://localhost/Classic-Models/public/office_update",
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
        formData.append("officeCode", formValue.officeCode)
        axios.post("http://localhost/Classic-Models/public/office_delete",
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
                    <h2>Office Page</h2>
                    <Tabs defaultActiveKey="Read" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Create" title="Create">
                            <Form onSubmit={handleSubmitCreate}>
                                <Form.Group className="mb-3" controlId="formofficeCode">
                                    <Form.Label>Office Code</Form.Label>
                                    <Form.Control
                                        name="officeCode"
                                        type="text"
                                        placeholder="Enter Office Code"
                                        value={formValue.officeCode}
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

                                <Form.Group className="mb-3" controlId="formterritory">
                                    <Form.Label>Territory</Form.Label>
                                    <Form.Control
                                        name="territory"
                                        type="text"
                                        placeholder="Enter Territory"
                                        value={formValue.territory}
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
                                <Form.Group className="mb-3" controlId="formofficeCode">
                                    <Form.Label>Office Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Office Code"
                                        name="officeCode"
                                        value={formValue.officeCode}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                            <ListGroup gap={3}>
                                <ListGroup.Item>Office Code: {formValue.officeCode}</ListGroup.Item>
                                <ListGroup.Item>Phone: {formValue.phone}</ListGroup.Item>
                                <ListGroup.Item>Address Line 1: {formValue.addressLine1}</ListGroup.Item>
                                <ListGroup.Item>Address Line 2: {formValue.addressLine2}</ListGroup.Item>
                                <ListGroup.Item>City: {formValue.city}</ListGroup.Item>
                                <ListGroup.Item>State: {formValue.state}</ListGroup.Item>
                                <ListGroup.Item>Postal Code: {formValue.postalCode}</ListGroup.Item>
                                <ListGroup.Item>Country: {formValue.country}</ListGroup.Item>
                                <ListGroup.Item>Territory: {formValue.territory}</ListGroup.Item>
                            </ListGroup>
                        </Tab>



                        <Tab eventKey="Update" title="Update">
                            <Form onSubmit={handleSubmitUpdate}>
                                <Form.Group className="mb-3" controlId="formofficeCode">
                                    <Form.Label>Office Code</Form.Label>
                                    <Form.Control
                                        name="officeCode"
                                        type="text"
                                        placeholder="Enter Office Code"
                                        value={formValue.officeCode}
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formofficeCode2">
                                    <Form.Label>New Office Code</Form.Label>
                                    <Form.Control
                                        name="officeCode2"
                                        type="text"
                                        placeholder="Enter new Office Code"
                                        value={formValue.officeCode2}
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

                                <Form.Group className="mb-3" controlId="formterritory">
                                    <Form.Label>Territory</Form.Label>
                                    <Form.Control
                                        name="territory"
                                        type="text"
                                        placeholder="Enter Territory"
                                        value={formValue.territory}
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
                                <Form.Group className="mb-3" controlId="formofficeCode">
                                    <Form.Label>Office Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Office Code"
                                        name="officeCode"
                                        value={formValue.officeCode}
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

export default Office;