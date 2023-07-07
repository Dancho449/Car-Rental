import React from "react"
import { Link } from "react-router-dom"
import carImg from "../images/car-img.png"


export default function Home() {
    return(
        <>
            <div className="home-container">
                <h1>You got place to go, we got the car for you.</h1>
                <p>Add adventure to your life by joining the #carhaven movement. Rent the perfect car to make your trip perfect.</p>
                <Link to="/cars" className="home-btn"><span>Find Your Cars</span></Link>
            </div>
            <div className="home-descrip-container">
                <img src={carImg} className="home-descrip-image" />
                <div className="descrip-page-content">
                    <h1>Don&apos;t squeeze in a sedan when you could relax in our cars.</h1>
                    <p>Our mission is to enliven your trip with the perfect rental car that fits your taste. Our cars are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitches costs extra 😉)</p>
                    <p>Our team is full of car enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="descrip-page-cta">
                    <h2>Your destination is waiting.<br />Your car is ready.</h2>
                    <Link className="descrip-link-button" to="/cars">Explore cars</Link>
                </div>
            </div>
            
        </>
    )
}