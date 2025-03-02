import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function 

() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid" >
            <Link className="navbar-brand" to={"/"} >
                Trip Planner
            </Link>
            <button
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse"
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="btn btn-outline-light" to="/adduser">
                Add User
            </Link>
        </div>    
        </nav>
        
    </div>
  )
}
