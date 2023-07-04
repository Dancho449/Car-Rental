import React from "react"
import { Link } from "react-router-dom"

export default function HostCars(){
    const [car, setCar] = React.useState([])

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setCar(data.vans))
    }, [])

    const HostCarElements = car.map(car => (
        <Link to={`/host/cars/${car.id}`} key={car.id} className="host-car-detail-link-container">
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