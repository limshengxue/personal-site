import React, { useEffect, useState } from 'react'
import Header from './Header';
import "./Project.css";
import Carousel from 'react-material-ui-carousel'
import { Button, Paper } from '@material-ui/core'

function Item({ image, title }) {
    return (
        <Paper>
            <img src={require(`${image}`)} alt="" />
        </Paper>
    )
}

function Projects({ data }) {
    const [index,setIndex] = useState(0);

    return (
        <div className="projects">
            <Header title="Projects that I've built" />
            <div className="projects__container">
            <div className="projects__carousel">
                <Carousel onChange={(index,active)=>{
                    setIndex(index)
                }}>
                    {
                        data.projects?.map((el, i) => <Item key={i} image={el.image} />)
                    }
                </Carousel>
            </div>
            <div className="projects__info">
                <h3>{data.projects[index].name}</h3>
                <p className="project__desc">{data.projects[index].desc}</p>
                <h4>Tech used : </h4>
                <p>{data.projects[index].techApplied.join(", ")}</p>
            </div></div>
        </div>
    )
}

export default Projects
