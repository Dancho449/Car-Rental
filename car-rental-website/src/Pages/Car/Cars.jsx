import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Car() {
    const [cars, setCars] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    
   
    React.useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setCars(data.vans))
    }, [])

    const displayCars = typeFilter ? cars.filter(car => car.type === typeFilter) : cars

    const CarElements = displayCars.map(car => (
        <div key={car.id} className="car-tile">
            <Link to={car.id} state={{ search: `?${searchParams.toString()}` }}>
                <img src={car.imageUrl} />
                <div className="car-info">
                    <h3>{car.name}</h3>
                    <p>${car.price}<span>/day</span></p>
                </div>
                <i className={`car-type ${car.type} selected`}>{car.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            }else{
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return(
        <>
            <div className="car-filter-container">
                <button onClick={() => handleFilterChange("type", "simple")} 
                className={`car-filter simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>

                <button onClick={() => handleFilterChange("type", "rugged")} 
                className={`car-filter rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>

                <button onClick={() => handleFilterChange("type", "luxury")} 
                className={`car-filter luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>

                { typeFilter ?
                    (<button onClick={() => handleFilterChange("type", null)} className="">Clear Filters</button>)
                : null}
            </div>
            <div className="car-list-container">
                <h1>Explore our van options</h1>
                <div className="car-list">
                    {CarElements}
                </div>
            </div>
        </>
        
    )
} 