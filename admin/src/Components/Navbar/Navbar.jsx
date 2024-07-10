import React from "react";
import './Navbar.css'
import navlogo from "../../assets/logo1.jpg"
import navProfile from "../../assets/navProfile.jpg"
import dropdown from '../../assets/f1.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="" className="nav-logo"/>
            <div className="nav-logo navlogo">
                <h1>SHOPPER</h1>
                <p>Admin Panel</p>
            </div>
            <img src={navProfile} alt="" className="nav-profile"/>
            <img src={dropdown} alt="" className="dropdown-icon"/>
        </div>
    )
}

export default Navbar;