import React from "react"
import { useParams } from "react-router-dom"

export default function CarDetail() {
    const Params = useParams()
    const [cars, setCars] = React.useState(null)


    React.useEffect(() => {
        fetch(`/api/vans/${Params.id}`)
            .then(res => res.json())
            .then(data => setCars(data.vans))
    }, [Params.id])

    return(
        <div className="car-detail-container">
        {cars ? (
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
        ) : <h2>Loading...</h2>}
    </div>
    )
}