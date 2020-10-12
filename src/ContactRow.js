import { Button } from '@material-ui/core';
import React from 'react'
import "./ContactRow.css";

function ContactRow({icon,title,desc,type}) {
    return (
        <div className="contactRow">
            <h3>{title}</h3>
            <div className="contactRow__content"> 
            <a href={type === "tel" ? `tel:${desc}` : `mailto:${desc}`}>{icon}</a>
            <p>{desc}</p>
            </div>
        </div>
    )
}

export default ContactRow
