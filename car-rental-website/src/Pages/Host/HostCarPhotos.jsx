import React from "react"
import  { useOutletContext } from "react-router-dom"

export default function HostCarPhotos(){
    const { currentCar }  = useOutletContext()
    return(
        <img src={currentCar.imageUrl} className="host-car-photos" width="200px" />
    )
}