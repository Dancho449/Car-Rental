import React from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostCars } from "../../api"
import { requireAuth } from "../../utils.js"
import BeatLoader from "react-spinners/BeatLoader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export async function loader(){
    await requireAuth()
    return defer ({ cars: getHostCars() })
}

export default function HostCars(){
    const loaderData = useLoaderData()
    const loading = true

    function renderCarElements(cars){
        const HostCarElements = cars.map(car => (
            <Link to={`cars/${car.id}`} key={car.id} className="host-car-detail-link-container">
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
            <div className="host-car-container">
                <h2>Your Listed Vehicles</h2>
                <main>
                    {HostCarElements}
                </main>
            </div>
        )
    }

    return (
        <>
            <section className="host-dashboard-earnings">
                <div className="info-dashboard">
                    <h2>Welcome!</h2>
                    <p>Income last <span>30 days</span></p>
                    <h1 className="dashboard-amount">$2,260</h1>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <div className="review-score-text">
                    <h3>Review score</h3>
                    <p>
                        <FontAwesomeIcon icon={faStar} style={{color: "#ffd700",}} />
                        <span>5.0</span>/5
                    </p>
                </div>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-cars">
                <div className="top-dashboard">
                    <h3>Your listed vans</h3>
                    <Link to="cars">View all</Link>
                </div>
                <React.Suspense fallback={<div className="loading-state"><BeatLoader 
                                        loading={loading}
                                        size={15}
                                        color="rgb(98, 98, 192)"
            /> </div>}>
                    <Await resolve={loaderData.cars}>
                        {renderCarElements}
                    </Await>
                </React.Suspense>
            </section>
        </>
    )
}