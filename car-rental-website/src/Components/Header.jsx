import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link className="header-link-home" to="/">#CARHAVEN</Link>
            <nav>
                <NavLink 
                className='header-links'
                to="/about"
                style={({isActive}) => isActive ? styles : null}
                >About</NavLink>

                <NavLink 
                className='header-links'
                to="/cars"
                style={({isActive}) => isActive ? styles : null}
                >Cars</NavLink>
                
                <NavLink 
                className='header-links'
                to="/host"
                style={({isActive}) => isActive ? styles : null}
                >Host</NavLink>
            </nav>
            
        </header>
    )
}