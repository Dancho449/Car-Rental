import React from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostCars } from "../../api"
import { requireAuth } from "../../utils.js"

export async function loader(){
    await requireAuth()
    return defer ({ cars: getHostCars() })
}

export default function HostCars(){
    const loaderData = useLoaderData()

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
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-cars">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="cars">View all</Link>
                </div>
                <React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.cars}>
                        {renderCarElements}
                    </Await>
                </React.Suspense>
            </section>
        </>
    )
}