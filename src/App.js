import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutMe from "./AboutMe";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const data = require("./data.json");

function App() {
  const [hideAboutMe, setHideAboutMe] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [aboutMeToggle, setAboutMeToggle] = useState(false);

  useEffect(() => {

    window.addEventListener("resize", (e => {
      setWidth(window.innerWidth)
      
    }))

  }, [])

  useEffect(() => {
    if (width < 760) {
      setHideAboutMe(true);
    } else {
      setHideAboutMe(false);
      setAboutMeToggle(false);
    }
  }, [width])

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__body">
          {aboutMeToggle && hideAboutMe && <AboutMe />}
          {!hideAboutMe ? <AboutMe /> :
            (<Button onClick={(e) => { setAboutMeToggle(!aboutMeToggle) }}><DragIndicatorIcon /></Button>)}
            <div className="app__mainContent">
          <Switch>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/skills" >
              <Skills data={data}/>
            </Route>
            <Route path="/projects" >
              <Projects data={data}/>
            </Route>
            <Route path="/">
              <Education data={data}/>
            </Route>
          </Switch>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
