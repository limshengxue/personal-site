import React from 'react'
import "./Navbar.css";
import {
    Link
  } from "react-router-dom";
  
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__name">
                <p>Lim Sheng Xue</p>
            </div>
            <div className="navbar__division">
                
            </div>
            <Link to="/"> 
            <div className="navbar__item">
                <p>Education</p>
            </div>
            </Link>
            <Link to="/skills"> 
            <div className="navbar__item">
                <p>Skills</p>
            </div>
            </Link>
            <Link to="/projects"> 
            <div className="navbar__item">
                <p>Projects</p>
            </div>
            </Link>
            <Link to="/contact"> 
            <div className="navbar__item">
                <p>Contact Me</p>
            </div>
            </Link>
        </div>
    )
}

export default Navbar
