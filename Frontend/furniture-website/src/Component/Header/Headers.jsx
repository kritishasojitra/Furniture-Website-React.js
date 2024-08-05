import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'


const Headers = () => {
  return (
    <>
    <div className="main-header shadow  mb-5 bg-body">
      <div className="top-header">
        <p className="mt-3 ms-5 fs-6 text-light">UP TO 40% OFF BEST-SELLING FURNITURE. SHOP NOW</p>
      </div>
      <div className="bottom-header">
        <div className="logo">
          <img src="https://nooni-be87.kxcdn.com/nooni/wp-content/themes/nooni/images/logo.png"/>
        </div>
        <div className="nav-bar">
          <NavLink to="/"  ActiveClassName="active" className="link">Home</NavLink>
          <NavLink to="/About" ActiveClassName="active" className="link">About us</NavLink>
          <NavLink to="/product" ActiveClassName="active" className="link">Product</NavLink>
          <NavLink to="/Contact" ActiveClassName="active" className="link">Contact us</NavLink>
        </div>
        <div className="icon-bar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <ul className="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-regular fa-user"></i>
          </a>
          <ul className="dropdown-menu text-center">
            <li> <Link to="/Singup" className="link">Singup</Link></li>
            <li> <Link to="/Loign" className="link">Login</Link></li>
          </ul>
        </li>
        </ul>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
    </>
  )
}

export default Headers