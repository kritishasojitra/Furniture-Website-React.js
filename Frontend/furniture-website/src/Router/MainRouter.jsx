import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "../Pages/Product";
import Contact from "../Pages/Contact";
import Singup from "../Pages/Singup";
import Loing from "../Pages/Loing";
import Singleproduct from "../Pages/Singleproduct";
import Privateroute from "../Component/Privaterouter/Privateroute";



const MainRouter=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Product" element={<Product/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Singup" element={<Singup/>}></Route>
            <Route path="/Loign" element={<Loing/>}></Route>
            <Route path="/Product/:id" element={<Singleproduct/>}></Route>
        </Routes>
        </>
    )
}

export default MainRouter;
