import React, { useEffect } from 'react'
import Header from "../components/Header/Header"
// import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { checkAuthenticated, load_user } from '../actions/auth'

const Layout = (props) => {
    useEffect(() => {
        props.checkAuthenticated()
        props.load_user()
    }, [])

    return (
        <>
            {/* <Header /> */}
            {props.children}
        </>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout)