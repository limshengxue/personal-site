import React from 'react'
import "./Contact.css";
import Header from "./Header";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import ContactRow from "./ContactRow"


function Contact() {
    return (
        <div className="contact">
            <Header title="Contact Me"/>
            <ContactRow icon={<CallIcon/>} title="Call Me" desc="016-4506997" type="tel"/>
            <ContactRow icon={<EmailIcon/>} title="Email Me" desc="limshengxue0820@gmail.com" type="mailto"/>
        </div>
    )
}

export default Contact
