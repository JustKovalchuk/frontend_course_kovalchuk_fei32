import { Link } from "react-router-dom"
import React, { useState } from 'react';
import "./course-box.css"
import REACT_APP_API_URL from '../../../consts'

import boxIng from "../../assets/images/course-cover.png"
import userIcon from "../../assets/icons/user.svg"

export const GetCourseBoxes = (count, all_courses, strat=0) =>
{
    const items = []
    for (let i = 0; i < count; i++){
        if (all_courses.length <= i + strat)
            break
        let info = all_courses[i + strat].fields
        items.push(
            <CourseBox title={info.title} image={info.image} id={info.url_text}/>
        )
    }

    return <>{items}</>
}


const CourseBox = (props) =>{
    return(
        <>
            <Link className='link' to={'/course/' + props.id}>
                <div className="course-box">
                    <div className="course-img-container">
                        <img src={REACT_APP_API_URL + "/" + props.image} alt={boxIng}/>
                    </div>
                    <div className="course-box-items">
                        <div className="course-name">{props.title}</div>
                        <div className="author-container">
                            <img className="icon" src={userIcon} alt="user icon"/>
                            <h6 className="author-name">Standford University</h6>
                        </div>
                    </div> 
                </div>
            </Link>
        </>
    )
}

export default CourseBox