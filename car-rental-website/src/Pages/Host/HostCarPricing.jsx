import React from "react"
import  { useOutletContext } from "react-router-dom"

export default function HostCarPricing(){
    const { currentCar }  = useOutletContext()
    return(
        <h2 className="host-car-pricing">${currentCar.price}<span>/day</span></h2>
    )
}