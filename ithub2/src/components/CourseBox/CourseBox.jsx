import { Link } from "react-router-dom"

import "./course-box.css"

import boxIng from "../../assets/images/course-cover.png"
import userIcon from "../../assets/icons/user.svg"

const CourseBox = () => <>
    <Link className='link' to='/course/'>
        <div className="course-box">
            <div className="course-img-container">
                <img src={boxIng} alt="Course cover image"/>
            </div>
            <div className="course-box-items">
                <h5 className="course-name">Python Development</h5>
                <div className="author-container">
                    <img className="icon" src={userIcon} alt="user icon"/>
                    <h6 className="author-name">Standford University</h6>
                </div>
            </div> 
        </div>
    </Link>
</>

export default CourseBox