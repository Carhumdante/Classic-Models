import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Navbar1() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/Classic-Models/public/">Classic Models</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Classic-Models/public/">Home</Nav.Link>
                        <Nav.Link href="/Classic-Models/public/product">Product</Nav.Link>
                        <Nav.Link href="/Classic-Models/public/order">Order</Nav.Link>
                        <Nav.Link href="/Classic-Models/public/customer">Customer</Nav.Link>
                        <Nav.Link href="/Classic-Models/public/office">Office</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Navbar1;