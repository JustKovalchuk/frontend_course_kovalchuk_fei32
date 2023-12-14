import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom'

const Footer = () => 
    <Container fluid className='bg-primary footer'>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <p className="col-md-4 mb-0 text-white">© 2023 ITHUB, Inc</p>
        
            {/* <!-- <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            </a> --> */}
        
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link className="link nav-link px-2 text-white" to="/home/">Home</Link></li>
                <li className="nav-item"><Link className="link nav-link px-2 text-white" to="/courses/">All Courses</Link></li>
            </ul>
        </footer>
    </Container>

export default Footer