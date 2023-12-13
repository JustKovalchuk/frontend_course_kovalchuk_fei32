import Footer from "./components/Footer"
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

import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {get_all_courses} from "./actions/courses"

import React from 'react';

import "./alignment.css"


var courses = []

function App({get_all_courses}) {
    get_all_courses()
    
    return (
        <>
        <Layout>
            <Routes>
                <Route path='/' >
                    <Route index element={<MainPage />} />
                </Route>
                <Route path='/course/' >
                    <Route index element={<CoursePage />} />
                </Route>
                <Route path='/home/' element={<MainPage />} />
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
export default connect(null, { get_all_courses })(App)
// export default App
