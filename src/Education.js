import React, { useState } from 'react'
import "./Education.css";
import Header from './Header';
import { Timeline, TimelineEvent } from 'react-event-timeline'
import AssignmentIcon from '@material-ui/icons/Assignment';



function Education({data}) {

    const [state, setState] = useState({ value: 0, previous: 0 })

    return (
        <div className="education">
            <Header title="Education" />
            {
                data.education.programmes?.map(el => (
                    <div className="education__programme">
                        <img src={el.image}
                            alt=""
                            className="education__eduLogo" />
                        <div className="education__programmeInfo">
                            <h4>{el.name}</h4>
                            <p>{el.source} <span>Result : {el.result} CGPA</span></p>
                        </div>
                    </div>
                ))
            }

            <div className="education__courses">
                <h3>Courses that I have taken</h3>
                <Timeline>
                    {
                        data.education.courses?.map(el => (
                            <TimelineEvent className="education__courseItem"
                                title={`Semester ${el.semester}`}
                                createdAt={el.date}
                                icon={<AssignmentIcon />}
                            >
                                <ul>
                                    {el.courseList?.map(el => (
                                        <li>{el}</li>
                                    ))}
                                </ul>
                            </TimelineEvent>
                        ))
                    }
                </Timeline>
            </div>


        </div>
    )
}

export default Education
