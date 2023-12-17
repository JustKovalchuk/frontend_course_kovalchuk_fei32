import { Link, Navigate  } from 'react-router-dom'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { EmptyEmailWarning, EmptyPasswordWarning, PasswordLengthWarning, LoginWarning, TryHideWarning, EmailFormatWarning } from './Warnings/Warning';
import {login, is_password_valid} from "../actions/auth"

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData
    
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    const onSubmit = e => {
        e.preventDefault()

        let hasNoWarning = true

        TryHideWarning(false, "login-error-container", hasNoWarning)

        hasNoWarning = TryHideWarning(email == '', "email-empty-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(!email.includes("@"), "email-format-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(password == '', "password-empty-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(!is_password_valid(password), "password-length-error-container", hasNoWarning) && hasNoWarning
        
        if (hasNoWarning)
        {
            console.log(login(email, password))
        }
    }

    if (isAuthenticated){
        return <Navigate to="/home/" replace={true}/>
    }

    return (
        <div className="body-container">
            <h1 className="fw-bold lh-1 my-3">LOG IN ITHUB</h1>

            {/* <div className="hor-flex-container">
                <button className="form-button-alt">
                    <img className="icon" src={googleIcon} alt="user icon"/>
                    Continue with Google
                </button>
            </div> */}
            
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
                
                <div id="login-error-container" style={{"display": "none"}}><LoginWarning /></div>
                <div id="email-empty-error-container" style={{"display": "none"}}><EmptyEmailWarning /></div>
                <div id="email-format-error-container" style={{"display": "none"}}><EmailFormatWarning /></div>
                
                <div id="password-empty-error-container" style={{"display": "none"}}><EmptyPasswordWarning /></div>
                <div id="password-length-error-container" style={{"display": "none"}}><PasswordLengthWarning /></div>

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
        </div>
    )
    
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)