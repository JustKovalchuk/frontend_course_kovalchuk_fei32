import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

import userIcon from "../assets/icons/user.svg"

const Header = () => <>
    <Navbar expand="md" className="bg-primary navbar-dark p-2">
        <Link className="link" to="/home"><Navbar.Brand><strong>ITHUB</strong></Navbar.Brand></Link>
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
            />
            <Button variant="warning">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" navbarScroll >
                <Link to="/login"><Nav.Link className='d-md-none' href="#action1">Log in</Nav.Link></Link>
                <Link to="/signup"><Nav.Link className='d-md-none' href="#action2">Sign up</Nav.Link></Link>
                <Link to="/account"></Link><Nav.Link className='d-md-none' href="#action3">Account</Nav.Link>
            </Nav>
        </Navbar.Collapse>

        <Nav className="d-none d-md-inline">
            <Link to="/login"><Button variant='warning rounded-pill header-buuton'>Log in</Button></Link>
            <Link to="/signup"><Button variant='warning rounded-pill header-buuton'>Sign up</Button></Link>
            <Link to="/account"><Button variant='warning rounded-pill header-buuton'><img className="icon"  src={userIcon} alt="Account"/></Button></Link>
        </Nav>
    </Navbar>
</>

export default Header