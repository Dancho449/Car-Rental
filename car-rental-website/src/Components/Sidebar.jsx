import React from "react"
import { NavLink } from "react-router-dom"

export default function Sidebar(props){
    const styles = {
        left: 0
    }
    return(
        <div className="sidebar"
        style={props.click ? styles : null}
        >
            <h2>#CarHaven</h2>
            <nav>
                <NavLink 
                    className='header-links-sidebar'
                    to="/about"
                    >About</NavLink>

                    <NavLink 
                    className='header-links-sidebar'
                    to="/cars"
                    >Cars</NavLink>
                    
                    <NavLink 
                    className='header-links-sidebar'
                    to="/host"
                    >Host</NavLink>
            </nav>
        </div>
    )
}