import Accordion from 'react-bootstrap/Accordion';

import "./course_page.css"

import courseCover from "../../assets/images/course-cover.png"
import userIcon from "../../assets/icons/user.svg"

function CoursePage() {
    return (
        <div className="body-container">
            <h1>Python Development</h1>
            <div className="course-page-container">
                <div className="course-page-header-container">
                    <div className="course-page-header-container-child">
                        <div title="Course Info">
                            <div>
                                <h3>Description</h3>
                                <p id="course-page-description-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Voluptate placeat ipsa repudiandae qui provident mollitia praesentium ipsum sed
                                    culpa quae. Officiis facere voluptatem in inventore repellat doloremque voluptate sunt
                                    recusandae!</p>
                            </div>
                            <div>
                                <h3>What you will learn</h3>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="course-page-header-container-child">
                        <img id="course-page-img" src={courseCover} alt="Course cover image"/>
                        <div className="author-container" id="course-page-author-container">
                            <img className="icon" src={userIcon} alt="user icon"/>
                            <p className="author-name">Stanford University</p>
                        </div>
                        <div className="rating">
                            <input value="5" name="rate" id="star5" type="radio"/>
                            <label title="text" for="star5"></label>
                            <input value="4" name="rate" id="star4" type="radio"/>
                            <label title="text" for="star4"></label>
                            <input value="3" name="rate" id="star3" type="radio" checked=""/>
                            <label title="text" for="star3"></label>
                            <input value="2" name="rate" id="star2" type="radio"/>
                            <label title="text" for="star2"></label>
                            <input value="1" name="rate" id="star1" type="radio"/>
                            <label title="text" for="star1"></label>
                        </div>
                        <div id="course-page-price-text">
                            <p>19.99$</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="course-page-container-child">
                <h2>Content</h2>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="course-page-container-child">
                <button className="hor-center-element" id="enroll-button">Enroll now</button>
            </div>
        </div>
    );
}

export default CoursePage