import React from "react"
import { useParams } from "react-router-dom"

export default function HostCarsDetails(){
    const { id } = useParams()
    const [currentCar, setCurrentCar] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentCar(data.vans))
    }, [])

    if(!currentCar){
        return <h2>Loading...</h2>
    }

    return(
        <div>
            <img src={currentCar.imageUrl} alt="" width="150px"/>
            <i className={`car-type ${currentCar.type} selected`}>
                {currentCar.type}
            </i>
            <h2>{currentCar.name}</h2>
            <p className="car-price"><span>${currentCar.price}</span>/day</p>  
        </div>
    )
}
