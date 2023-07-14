import React from "react"
import { useLocation, Link, useLoaderData } from "react-router-dom"
import { getCars } from "../../api"

export function loader({ params }){
    return getCars(params.id)
}

export default function CarDetail() {
    const location = useLocation()
    const cars = useLoaderData()


    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return(
        <div className="car-detail-container">
            <Link to={`..${search}`} relative="path" className="back-btn">
                &larr;<span>Back to {type} cars</span>
            </Link>
                <div className="car-detail">
                    <img src={cars.imageUrl} />
                    <i className={`car-type ${cars.type} selected`}>
                        {cars.type}
                    </i>
                    <h2>{cars.name}</h2>
                    <p className="car-price"><span>${cars.price}</span>/day</p>
                    <p>{cars.description}</p>
                    <button className="link-button">Rent this car</button>
                </div>
        </div>
       
    )
}