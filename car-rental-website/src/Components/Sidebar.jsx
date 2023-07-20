import React from "react"
import { NavLink, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(props){
    const styles = {
        left: 0
    }
    return(
        <div className="sidebar"
        style={props.click ? styles : null}
        >
            <Link className="sidebar-header" to="/">#CARHAVEN</Link>
            <nav>
                <NavLink 
                    className='header-links-sidebar'
                    to="/about"
                    >About <FontAwesomeIcon icon={faBinoculars} style={{color: "#1b2f50",}} /></NavLink>

                    <NavLink 
                    className='header-links-sidebar'
                    to="/cars"
                    >Cars <FontAwesomeIcon icon={faCar} /></NavLink>
                    
                    <NavLink 
                    className='header-links-sidebar'
                    to="/host"
                    >Host <FontAwesomeIcon icon={faUser} /></NavLink>
            </nav>
        </div>
    )
}