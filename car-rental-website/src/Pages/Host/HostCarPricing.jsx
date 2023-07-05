import React from "react"
import  { useOutletContext } from "react-router-dom"

export default function HostCarPricing(){
    const [currentCar, setCurrentCar] = useOutletContext()
    return(
        <h2>${currentCar.price}<span>/day</span></h2>
    )
}