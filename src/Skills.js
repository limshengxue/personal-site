import React, { useEffect, useState } from 'react'
import Header from './Header';
import "./Skills.css";
import { SkillBars } from 'react-skills';
import image from "./Images/toastmasters.jpeg";


function Skills({data}) {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(data.skills.sort((a, b) => b.proficiency - a.proficiency).map(el => {
            return {
                name: el.name,
                level: el.proficiency,
                color: "coral"
            }
        }))
    }, [])

    return (
        <div className="skills">
            <Header title="Technical Skills" />
            <div className="skills__technicalSkills">
                <SkillBars skills={skills} labelsWidth={300}></SkillBars>
            </div>
            <Header title="Soft Skills" />
            <div className="skills__softSkills">
                <img src={image} alt="" />
                <p>I am an active member of APU Toastmasters Club. 
                I was given various opportunities to improve my communication skills and public speaking skills.
                I also get to build up my leadership skills in organizing meetings and serving as a club officer.
                </p>
            </div>
        </div>
    )
}

export default Skills
