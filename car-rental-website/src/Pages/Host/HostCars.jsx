import React from "react"
import { Link, redirect, useLoaderData } from "react-router-dom"
import { getHostCars } from "../../api"
import { requireAuth } from "../../utils"

export async function loader(){
    await requireAuth()
    return getHostCars() 
}

export default function HostCars(){
    const cars = useLoaderData()

    const HostCarElements = cars.map(car => (
        <Link to={car.id} key={car.id} className="host-car-detail-link-container">
            <div className="host-car-single" key={car.id}>
                <img src={car.imageUrl} alt={`Photo of ${car.name}`} />
                <div className="host-car-info">
                    <h3>{car.name}</h3>
                    <p>${car.price}/day</p>
                </div>
            </div>
        </Link>
    ))
    return(
        <div>
            <h2>Your Listed Vehicles</h2>
            <main>
                {HostCarElements}
            </main>
        </div>
    )
}

