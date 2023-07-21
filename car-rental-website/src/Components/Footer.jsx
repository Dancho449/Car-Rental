import React from "react"

export default function Footer() {
    return(
        <div className="footer-container">
            <footer>
                <div className="footer-section">
                    <h2>Contact</h2>
                    <p>carrental@hotmail.com</p>
                    <p>(+234) 701234567</p>
                    <p>Blog</p>
                </div>
                <div className="footer-section">
                    <h2 className="footer-heading">Working Hours</h2>
                    <p>Mon - Fri: 9:00AM - 9:00PM</p>
                    <p>Sat: 9:00AM - 19:00PM</p>
                    <p>Sun: Closed</p>
                </div>
                <div className="footer-section">
                    <h2>Company</h2>
                    <p>Lagos</p>
                    <p>Abuja</p>
                    <p>Port-Harcourt</p>
                    <p>New York</p>
                </div>
            </footer>
            <p className="copyright-text">&copy;Copyright 2022 CARHEAVEN & Dancho</p>
        </div>
    )
}