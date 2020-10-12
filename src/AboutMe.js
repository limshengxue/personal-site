import { Avatar } from '@material-ui/core';
import Propic from "./Images/ProfilePicture.jpg";
import React from 'react'
import "./AboutMe.css"

function AboutMe() {
    return (
        <div className="aboutMe">
            <Avatar
                src={Propic}
                alt=""
                className="aboutMe__proPic"
            />
            <h1 className="aboutMe__name">Lim Sheng Xue</h1>
            <hr/>
            <p className="aboutMe__desc">A software engineering student. Passionate to learn and build cool stuffs.🚀</p>
        </div>
    )
}

export default AboutMe
