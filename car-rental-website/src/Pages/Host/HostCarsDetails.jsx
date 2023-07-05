import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

export default function HostCarsDetails(){
    const { id } = useParams()
    const [currentCar, setCurrentCar] = React.useState(null)

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentCar(data.vans))
    }, [])

    if(!currentCar){
        return <h2>Loading...</h2>
    }

    return(
        <section>
            <Link to=".." relative="path" className="back-btn">
            &larr;<span>Back to Cars</span>
            </Link>

            <div className="host-car-detail-layout-container">
                <div className="host-car-detail">
                    <img src={currentCar.imageUrl} alt="" width="150px"/>
                    <i className={`car-type ${currentCar.type} selected`}>
                        {currentCar.type}
                    </i>
                    <h2>{currentCar.name}</h2>
                    <p className="car-price"><span>${currentCar.price}</span>/day</p>  
                </div>

                <nav className="host-car-detail-nav">
                    <NavLink to="." end style={({ isActive }) => isActive ? styles : null}>
                        Details
                    </NavLink>

                    <NavLink to="pricing" style={({ isActive }) => isActive ? styles : null}>
                        Pricing
                    </NavLink>

                    <NavLink to="photos" style={({ isActive }) => isActive ? styles : null}>
                        Photos
                    </NavLink>
                </nav>

                <Outlet context={[currentCar, setCurrentCar]}/>
            </div>
        </section>
    )
}
