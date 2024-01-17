import Accordion from 'react-bootstrap/Accordion';

import "./course_page.css"

import { useParams } from 'react-router-dom'
import userIcon from "../../assets/icons/user.svg"
import starIcon from "../../assets/icons/star.png"

import REACT_APP_API_URL from '../../../consts'
import React, { useState, useEffect  } from 'react';
import axios from 'axios'

const AccordionItemsBody = (props) =>{    
    return (
    <div>
        <strong>{props.id}. {props.text}</strong>
        <br />
        {props.description}
    </div>)
}

const AccordionItems = (props) =>{
    let acordionItems = []
    let id_count = 1
    for (let i = 0; i < props.sections.sections.length; i++) {        
        let section_elements = []

        for (let k = 0; k < props.sections.elements[i+1].length; k++) {
            let el = props.sections.elements[i+1][k]
            section_elements.push(<AccordionItemsBody id={id_count} text={el.title} description={el.description}/>)
            id_count = id_count + 1
        }
        
        acordionItems.push(
            <Accordion.Item eventKey={i}>
                <Accordion.Header>{props.sections.sections[i].title}</Accordion.Header>
                <Accordion.Body>
                    {section_elements}
                </Accordion.Body>
            </Accordion.Item>
        ) 
    }
    return acordionItems
}

const CoursePage = () => {
    const [courseInfo, setCourseInfo] = useState({
        title: "",
        description: "",
        image: "",
        price: "0"
    })
    const [sections, setSections] = useState({
        sections: [],
        elements: []
    })
    // this.state = {courseInfo: 0}
    
    const { id } = useParams()
    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const body = JSON.stringify({ id });

        axios.post(`${REACT_APP_API_URL}/courses/get_course/`, body, config).then(function (value) {
                setCourseInfo(value.data[0]["fields"])
            }).catch((e) => {
                console.log("error loading course data", e)
            })
        axios.post(`${REACT_APP_API_URL}/courses/get_course_sections/`, body, config).then(function (value) {
                console.log("successful loading course sections", value)
                setSections(value.data)
            }).catch((e) => {
                console.log("error loading course sections", e)
            })
        return () => {
        }
    }, [id])
    
    return (
        <div className="body-container">
            <h1 className="fw-bold lh-1 my-3">{courseInfo.title}</h1>
            <div className="course-page-container">
                <div className="course-page-header-container">
                    <div className="course-page-header-container-child">
                        <div title="Course Info">
                            <div>
                                <h3>Description</h3>
                                <p id="course-page-description-text">{courseInfo.description}</p>
                            </div>
                            {/* <div>
                                <h3>What you will learn</h3>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    <div className="course-page-header-container-child">
                        <img id="course-page-img" src={REACT_APP_API_URL + "/" + courseInfo.image} alt="Course cover image"/>
                        <div className="author-container" id="course-page-author-container">
                            <img className="icon" src={userIcon} alt="user icon"/>
                            <p className="author-name">Stanford University</p>
                        </div>
                        <div>
                            <strong>{courseInfo.rating}</strong>
                            <img className="icon rating-icon" src={starIcon} alt="user icon"/>
                        </div>
                        {/* <div className="rating">
                            <input value="5" name="rate" id="star5" type="radio"/>
                            <label title="text" htmlFor="star5"></label>
                            <input value="4" name="rate" id="star4" type="radio"/>
                            <label title="text" htmlFor="star4"></label>
                            <input value="3" name="rate" id="star3" type="radio" defaultChecked=""/>
                            <label title="text" htmlFor="star3"></label>
                            <input value="2" name="rate" id="star2" type="radio"/>
                            <label title="text" htmlFor="star2"></label>
                            <input value="1" name="rate" id="star1" type="radio"/>
                            <label title="text" htmlFor="star1"></label>
                        </div> */}
                        <div id="course-page-price-text">
                            <strong>{courseInfo.price}$</strong>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="course-page-container-child">
                <h2>Content</h2>
                <Accordion defaultActiveKey="0" flush>
                    <AccordionItems sections={sections}/>
                </Accordion>
            </div>
            <div className="course-page-container-child">
                <button className="hor-center-element general-btn">Enroll now</button>
            </div>
        </div>
    );
}

export default CoursePage