import React from "react"
import { Link, NavLink } from "react-router-dom"
import hamburger from "../images/menubar-dark.png"
import ex from "../images/x-icon.png"
import Sidebar from "./Sidebar"

export default function Header() {
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const [clicked, setClicked] = React.useState(false)

    function toggle(){
        setClicked(prevState => !prevState)
    }
    function fakeLogOut(){
        localStorage.removeItem("loggedin")
    }

    return (
        <>
                <header>
                    <Link className="header-link-home" to="/">#CARHAVEN</Link>
                    <nav className="laptop-navbar">
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
                    <button className="ham-btn" onClick={toggle}>
                        <img src={clicked ? ex : hamburger } className="hamburger" />
                    </button>
                    
                    
                </header>
                <Sidebar click={clicked}/>
                <button onClick={fakeLogOut}>X</button>
        </>
    )
}