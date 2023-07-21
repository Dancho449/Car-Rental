import React from "react"
import { Link, NavLink } from "react-router-dom"
import hamburger from "../images/menubar-dark.png"
import ex from "../images/x-icon.png"
import Sidebar from "./Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "rgb(80, 80, 226)"
    }
    const [clicked, setClicked] = React.useState(false)

    function toggle(){
        setClicked(prevState => !prevState)
    }

    return (
        <>
                <header>
                    <Link className="header-link-home" to="/">#CARHAVEN <FontAwesomeIcon icon={faCar} style={{color: "#1d3882",}} /></Link>
                    <nav className="laptop-navbar">
                        <NavLink 
                        className='header-links'
                        to="/host"
                        style={({isActive}) => isActive ? styles : null}
                        >Host</NavLink>

                        <NavLink 
                        className='header-links'
                        to="/cars"
                        style={({isActive}) => isActive ? styles : null}
                        >Cars</NavLink>
                        
                        <NavLink 
                        className='header-links'
                        to="/about"
                        style={({isActive}) => isActive ? styles : null}
                        >About</NavLink>
                    </nav>
                    <button className="ham-btn" onClick={toggle}>
                        <img src={clicked ? ex : hamburger } className="hamburger" />
                    </button>
                    
                    
                </header>
                <Sidebar click={clicked}/>
        </>
    )
}