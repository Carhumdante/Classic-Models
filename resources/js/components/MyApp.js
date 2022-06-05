import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Order from "./pages/Order";
import Customer from "./pages/Customer";
import Office from "./pages/Office";
import Home from "./pages/Home";
import Product from "./pages/Product";

function MyApp() {
    return (
        <>
        
        <Navbar />
        
        <Routes>
            <Route path="/Classic-Models/public/order" element={<Order /> } />
            <Route path="/Classic-Models/public/" element={<Home /> } />
            <Route path="/Classic-Models/public/customer" element={<Customer /> } />
            <Route path="/Classic-Models/public/product" element={<Product /> } />
            <Route path="/Classic-Models/public/office" element={<Office /> } />
        </Routes>
        </>
    );
}

export default MyApp;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('app'));
}