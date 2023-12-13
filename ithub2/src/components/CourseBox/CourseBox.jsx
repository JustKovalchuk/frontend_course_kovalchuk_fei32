import { Link } from "react-router-dom"
import React, {Component} from "react"
import { get_random_course } from "../../actions/courses"
import "./course-box.css"
import REACT_APP_API_URL from '../../../consts'
import axios from 'axios'

import { useState } from 'react';

import boxIng from "../../assets/images/course-cover.png"
import userIcon from "../../assets/icons/user.svg"

class CourseBox extends Component{
    render() {
        return(
            <>
                <Link className='link' to='/course/'>
                    <div className="course-box">
                        <div className="course-img-container">
                            <img src={boxIng} alt="Course cover image"/>
                        </div>
                        <div className="course-box-items">
                            <h5 className="course-name">B</h5>
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
}
// const mapStateToProps = state => ({
// })
// export default connect({ get_random_course })(CourseBox)
export default CourseBox