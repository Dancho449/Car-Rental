import React from "react"
import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <div className="not-found-container">
           <h1>Something went wrong...page not found</h1>
            <Link to="/" className="not-found-btn">Back to Home</Link>
        </div>
         
    )
}