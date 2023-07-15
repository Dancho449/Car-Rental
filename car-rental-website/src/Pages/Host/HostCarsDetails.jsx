import React from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getHostCars } from "../../api"
import { requireAuth } from "../../utils.js"

export async function loader({ params }){
    await requireAuth()
    return getHostCars(params.id)
}

export default function HostCarsDetails(){
    const currentCar = useLoaderData()

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <section className="host-car-detail-outlet-container">
            <Link to=".." relative="path" className="back-btn">
            &larr;<span>Back to Cars</span>
            </Link>

            <div className="host-car-detail-layout-container">
                <div className="host-car-detail">
                    <img src={currentCar.imageUrl} alt="" width="150px"/>
                    <div className="host-car-detail-info-text">
                        <i className={`car-type ${currentCar.type} selected`}>
                        {currentCar.type}
                        </i>
                        <h2>{currentCar.name}</h2>
                        <p className="car-price"><span>${currentCar.price}</span>/day</p> 
                    </div>
                </div>

                <nav className="host-car-detail-nav">
                    <NavLink to="." end style={({ isActive }) => isActive ? styles : null}>
                        Details
                    </NavLink>

                    <NavLink to="pricing" style={({ isActive }) => isActive ? styles : null}>
                        Pricing
                    </NavLink>

                    <NavLink to="photos" style={({ isActive }) => isActive ? styles : null}>
                        Photos
                    </NavLink>
                </nav>

                <Outlet context={{ currentCar }}/>
            </div>
        </section>
    )
}