import React from "react"
import { Link } from "react-router-dom"
import Hero from "../images/about-hero2.jpg"
import Booking from "../images/undraw_booking.svg"
import Phone from "../images/undraw_phone_call.svg"
import Savings from "../images/undraw_savings.svg"
import Pickup from "../images/undraw-seamless-pickup.svg"
import Selection from "../images/undraw-wide-selection.svg"


export default function About() {
    return(
        <div className="about-page-container">
            <img src={Hero} className="about-hero-image" />
            <div className="descrip-page-content">
                <h1>Introducing CarHaven! Your  Choice for Effortless Car Rental</h1>
                <p>Looking for a seamless, stress-free car rental experience that puts you in the driver's seat? Look no further than CarHaven, the newest player in the car rental industry. We're here to revolutionize the way you hit the road, offering a range of unbeatable services designed to make your journey as smooth as possible.</p>
                <p>At CarHaven, we understand the hassle and headaches that often come with renting a car, the confusing procedures, hidden fees, and subpar customer service. That's why we're committed to delivering a refreshingly different experience from the moment you step into our world.</p>
                <p>What sets CarHaven apart? Let&apos;s dive into out sensational services:</p>
            </div>
           <div className="about-num-container">
                <div className="about-num">
                    <img src={Booking} className="about-num-image" />
                    <h1>Effortless Booking</h1>
                    <p>Our user-friendly website and intuitive mobile app make booking the perfect ride a breeze. With just a few clicks, you can secure your vehicle of choice, from compact cars for solo adventures to spacious SUVs for family getaways.</p>
                </div>

                <div className="about-num">
                    <img src={Savings} className="about-num-image" />
                    <h1>Transparent Pricing</h1>
                    <p>No more surprises when it's time to settle the bill. CarHaven believes in 100% transparency what you see is what you pay. Say goodbye to hidden fees and hello to budget-friendly rates that won't break the bank.</p>
                </div>

                <div className="about-num">
                    <img src={Selection} className="about-num-image" />
                    <h1>Wide Selection of Quality Vehicles</h1>
                    <p>We take great pride in maintaining a diverse fleet of meticulously serviced and spotlessly clean vehicles. Enjoy choosing from a wide range of well-maintained automobiles, ensuring a comfortable and reliable ride every time.</p>
                </div>

                <div className="about-num">
                    <img src={Pickup} className="about-num-image" />
                    <h1>Seamless Pickup and Drop-off </h1>
                    <p> We know your time is precious. That's why we've simplified the rental process, allowing for quick and hassle-free pickups and drop-offs. Say farewell to long queues and paperwork at DriveEasy, we value your time.</p>
                </div>

                <div className="about-num">
                    <img src={Phone} className="about-num-image" />
                    <h1>Exceptional Customer Service</h1>
                    <p>Our dedicated team of friendly and knowledgeable professionals is always ready to assist you. Whether you require personalized recommendations, have questions, or need roadside assistance, count on us to go above and beyond to meet your needs.</p>
                </div>
            </div>
            
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" to="/cars">Explore our vans</Link>
            </div>
        </div>
    )
}