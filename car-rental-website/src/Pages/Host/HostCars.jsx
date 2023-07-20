import React from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostCars } from "../../api"
import { requireAuth } from "../../utils.js"
import BeatLoader from "react-spinners/BeatLoader"

export async function loader(){
    await requireAuth()
    return defer ({ cars: getHostCars() })
}

export default function HostCars(){
    const dataPromise = useLoaderData()
    const loading = true

    function renderCarElements(cars){
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
            <React.Suspense fallback={<div className="loading-state"><BeatLoader 
                                        loading={loading}
                                        size={15}
                                        color="rgb(98, 98, 192)"
            /> </div>}>
                <Await resolve={dataPromise.cars}>
                    {renderCarElements}
                </Await>
            </React.Suspense>
        </>
    )

}

