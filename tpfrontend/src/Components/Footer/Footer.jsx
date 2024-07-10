import React from "react";
import './Footer.css'
import logo from "../Assets/logo1.jpg"
import facebook_icon from '../Assets/fb.jpg'
import instagram_icon from '../Assets/instagram.png'
import whatsapp_icon from "../Assets/whatsapp.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={facebook_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 | Nat'Dev | - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;