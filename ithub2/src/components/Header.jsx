import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate  } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

import userIcon from "../assets/icons/user.svg"

import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Header = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };
    const guestFullLinks = () => (
        <Fragment>
            <Link to="/login/"><Button variant='warning rounded-pill header-buuton'>Login</Button></Link>
            <Link to="/signup/"><Button variant='warning rounded-pill header-buuton'>Signup</Button></Link>  
        </Fragment>
    );
    const guestShortLinks = () => (
        <Fragment>
            <Link to="/login" className='d-md-none nav-link'>Login</Link>
            <Link to="/signup" className='d-md-none nav-link'>Signup</Link>
        </Fragment>
    );

    const authFullLinks = () => (
        <>
            <Button variant='warning rounded-pill header-buuton' onClick={logout_user}>Logout</Button>
            <Link to="/account"><Button variant='warning rounded-pill header-buuton'><img className="icon"  src={userIcon} alt="Account"/></Button></Link>
        </> 
    );
    const authShortLinks = () => (
        <>
            <Link className='d-md-none nav-link' onClick={logout_user}>Logout</Link>
            <Link className='d-md-none nav-link' to="/account">Account</Link> 
        </>
    );

    return (
        <Container fluid className='bg-primary header'>
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
                        {isAuthenticated ? authShortLinks() : guestShortLinks()}
                    </Nav>
                </Navbar.Collapse>

                <Nav className="d-none d-md-inline">
                    {isAuthenticated ? authFullLinks() : guestFullLinks()}
                </Nav>
            </Navbar>
        </Container>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Header)