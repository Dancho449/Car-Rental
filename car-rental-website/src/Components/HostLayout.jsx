import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <>
            <nav className="host-link-container">
                <NavLink to="." 
                className="host-links"
                end
                style={({isActive}) => isActive ? styles : null}>
                    Dashboard
                </NavLink>

                <NavLink to="income" className="host-links"
                style={({isActive}) => isActive ? styles : null}>
                    Income
                </NavLink>

                <NavLink to="reviews" className="host-links"
                style={({isActive}) => isActive ? styles : null}>
                    Reviews
                </NavLink>

                <NavLink to="cars" className="host-links"
                style={({isActive}) => isActive ? styles : null}>
                    Your Cars
                </NavLink>
            </nav>

            <Outlet />
        </>
        
        
    )
}