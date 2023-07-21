import React from "react"
import { Link } from "react-router-dom"
import carImg from "../images/car-img.png"
import Booking from "../images/undraw_booking.svg"
import Savings from "../images/undraw_savings.svg"
import Selection from "../images/undraw-wide-selection.svg"
import google from "../images/google-play.svg"
import appstore from "../images/playstore.svg"
import blueCar from "../images/blue-car-img.png"


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
                <div className="descrip-page-content-home">
                    <h1>Don&apos;t squeeze in a sedan when you could relax in our cars.</h1>
                    <p>Our mission is to enliven your trip with the perfect rental car that fits your taste. Our cars are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitches costs extra 😉)</p>
                    <p>Our team is full of car enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="descrip-page-cta">
                    <h2>Your destination is waiting.<br />Your car is ready.</h2>
                    <Link className="descrip-link-button" to="/cars">Explore cars</Link>
                </div>
            </div>

            <h2 className="mini-about-head">What makes us different from the rest..</h2>

            <div className="mini-about">
                <div className="about-num-home">
                    <img src={Booking} className="about-num-image-home" />
                    <h1>Effortless Booking</h1>
                    <p>Our user-friendly website and intuitive mobile app make booking the perfect ride a breeze. With just a few clicks, you can secure your vehicle of choice, from compact cars for solo adventures to spacious SUVs for family getaways.</p>
                </div>

                <div className="about-num-home">
                    <img src={Savings} className="about-num-image-home" />
                    <h1>Transparent Pricing</h1>
                    <p>No more surprises when it's time to settle the bill. CarHaven believes in 100% transparency what you see is what you pay. Say goodbye to hidden fees and hello to budget-friendly rates that won't break the bank.</p>
                </div>

                <div className="about-num-home">
                    <img src={Selection} className="about-num-image-home" />
                    <h1>Wide Selection of Quality Vehicles</h1>
                    <p>We take great pride in maintaining a diverse fleet of meticulously serviced and spotlessly clean vehicles. Enjoy choosing from a wide range of well-maintained automobiles, ensuring a comfortable and reliable ride every time.</p>
                </div>
            </div>
            <div className="application">
                <div className="app-text">
                    <h1>Download our app from the most out of us</h1>
                    <p>Download app today to get access to better features that will take your car renting experience to the very next level! We are available on all poppular platfomrs like the App Store and the Google Play Store.</p>
                    <div className="img-flex">
                        <img src={google} className="app-text-image" />
                        <img src={appstore} className="app-text-image" />
                    </div>
                </div>
                <img src={blueCar} className="blue-car-app" />
            </div>
        </>
    )
}