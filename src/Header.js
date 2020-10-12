import React from 'react'
import "./Header.css";

function Header({title}) {
    return (
        <div className="header">
            <h1>{title}</h1>
            <hr></hr>
        </div>
    )
}

export default Header
