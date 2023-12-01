import { Link, Navigate  } from 'react-router-dom'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import {login} from "../actions/auth"

import googleIcon from "../assets/icons/google.png"

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData
    
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    const onSubmit = e => {
        e.preventDefault();
        console.log(email, password)
        login(email, password)
    }

    if (isAuthenticated){
        return <Navigate to="/home/" replace={true}/>
    }

    return (
        <>
        <h1>LOG IN COURSERA</h1>

        <div className="hor-flex-container">
            <button className="form-button-alt">
                <img className="icon" src={googleIcon} alt="user icon"/>
                Continue with Google
            </button>
        </div>
        <form>
            <div id="login-form" className="info_container hor-center-element">
                <div className="hor-flex-container input-div">
                    <label htmlFor="email">Email</label>
                    <input placeholder="email@address.com" type="email" id="login-form-email" name="email" value={email} onChange={e => onChange(e)} required/>
                </div>
                <div className="hor-flex-container input-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="login-form-password" name='password' value={password} onChange={e => onChange(e)} minLength="6" required/>
                </div>
            </div>

            <div className="hor-flex-container">
                <button id="login-button" onClick={e => onSubmit(e)} className="form-button">LOGIN</button>
            </div>
        </form>
        <div className="hor-flex-container">
            <label>DON'T HAVE AN ACCOUNT?</label>
            <Link to='/signup/'>
                <u><p className="log-sign-label">SIGNUP</p></u>
            </Link>
        </div>
        <div className="hor-flex-container">
            <label>FORGOT YOUR PASSWORD?</label>
            <Link to='/reset-password/'>
                <u><p className="log-sign-label">RESET PASSWORD</p></u>
            </Link>
        </div>
    </>
    )
    
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)