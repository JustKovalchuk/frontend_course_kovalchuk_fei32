import heroImg from "../assets/images/home-hero.jpg"
import {GetCourseBoxes} from "./CourseBox/CourseBox"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './mainPage.css';

// import required modules
import { Pagination, Navigation  } from 'swiper/modules';

function CourseSlide(props) {
    let startArr = []
    let slidesCount = 3
    for (let i = 0; i < slidesCount; i++)
    {
        startArr.push(i*props.count)
    }

    let SwiperSliderArr = []
    for (let i = 0; i < slidesCount; i++)
    {
        SwiperSliderArr.push(<SwiperSlide>{GetCourseBoxes(props.count, props.all_courses, startArr[i])}</SwiperSlide>)
    }
    return (    
        <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
           {SwiperSliderArr}
        </Swiper>
    );
}

const MainPage = ({all_courses}) => 
{
    console.log(all_courses)
    return(
        <div className="body-container">
            <div className="container col-xxl-10 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <Container>
                        <Row>
                            <Col className="my-3">
                                <h1 className="display-5 fw-bold lh-1 my-3">Welcome to Your Path to Tech Success</h1>
                                <p id="hero-text" className="lead">Unleash your potential in the world of technology with our cutting-edge IT courses. Whether you're a beginner looking to kickstart your career or a seasoned professional seeking to upskill, our comprehensive programs have got you covered.</p>
                                
                                <div className="d-flex justify-content-center">
                                    <Link className="general-btn link" to='/courses/'>Courses</Link>
                                </div>
                            </Col>
                            <Col sm={0} lg={6}>
                                <img id="hero-img" src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <main>
                <div className="d-none d-xxl-block hor-flex-container">
                    <CourseSlide all_courses={all_courses} count={4}/>
                </div>
                <div className="d-none d-xl-block d-xxl-none hor-flex-container">
                    <CourseSlide all_courses={all_courses} count={3}/>
                </div>
                <div className="d-none d-md-block d-xl-none hor-flex-container">
                        <CourseSlide all_courses={all_courses} count={2}/>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = state => ({
    all_courses: state.courses.courses
})

export default connect(mapStateToProps)(MainPage)