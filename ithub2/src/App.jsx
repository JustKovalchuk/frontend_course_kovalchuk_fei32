import Footer from "./components/Footer"
import Header from "./components/Header"
import MainPage from "./components/MainPage"
import Courses from "./components/Courses"
import CoursePage from "./components/CoursePage/CoursePage"
import Account from "./components/Account"
import Login from "./components/Login"
import Signup from "./components/Signup"
import PasswordReset from "./components/Passwors/PasswordReset"
import PasswordResetConfirm from "./components/Passwors/PaswordResetConfirm"
import Layout from './hocs/Layout'
import Activate from './components/Activate'

import { Routes, Route, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import {get_all_courses} from "./actions/courses"

import React, {useLayoutEffect} from 'react';

import "./alignment.css"
import './index.css'
import './forms.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// export { Link, Router,  } from '@reach/router'

function App({get_all_courses}) {
    get_all_courses()
    
    return (
        <>
        <Header />
        <ScrollToTop />
        <Layout>
            <Routes>
                <Route path='/' >
                    <Route index element={<MainPage />} />
                </Route>
                <Route path='/home/' element={<MainPage />} />
                <Route path='/course/:id' element={<CoursePage />} />
                <Route path='/courses/' element={<Courses />} />
                <Route path='/login/' element={<Login />} />
                <Route path='/signup/' element={<Signup />} />
                <Route path='/reset-password/' element={<PasswordReset />} />
                <Route path='/password/reset/confirm/:uid/:token' element={<PasswordResetConfirm />} />
                <Route path='/activate/:uid/:token' element={<Activate />} />

                <Route path='/account/' element={<Account />} />
            </Routes>
        </Layout>
        <Footer/>
        </>
        
      );
}

function ScrollToTop() {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default connect(null, { get_all_courses })(App)
// export default App
