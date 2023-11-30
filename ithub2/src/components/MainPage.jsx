import heroImg from "../assets/images/home-hero.png"
import CourseBox from "./CourseBox/CourseBox"

import {Link} from 'react-router-dom'

const MainPage = () => <>
    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Welcome to Your Path to Tech Success</h1>
                <p className="lead">Unleash your potential in the world of technology with our cutting-edge IT courses. Whether you're a beginner looking to kickstart your career or a seasoned professional seeking to upskill, our comprehensive programs have got you covered.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <Link className="link btn btn-primary btn-lg px-4 me-md-2" to='/courses/'>Courses</Link>
                </div>
            </div>
        </div>
    </div>
    <main>
        <div className="hor-flex-container">
            <CourseBox />
            <CourseBox />
            <CourseBox />
            <CourseBox />
        </div>
    </main>
    <div id="page-selector">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</>

export default MainPage