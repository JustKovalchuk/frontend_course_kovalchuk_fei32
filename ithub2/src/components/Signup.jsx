import {Link, Navigate} from 'react-router-dom'

import { EmptyEmailWarning, EmptyPasswordWarning, PasswordLengthWarning, PasswordMatchWarning, SignWarning, TryHideWarning, EmailFormatWarning } from './Warnings/Warning';

import { signup } from "../actions/auth"
import { connect } from 'react-redux'
import { useState } from 'react';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });
    
    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const onSubmit = e => {
        e.preventDefault()
        
        let hasNoWarning = true

        hasNoWarning = TryHideWarning(email == '', "email-empty-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(!email.includes("@"), "email-format-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(password == '', "password-empty-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(password.length < 6, "password-length-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(password != re_password, "password-match-error-container", hasNoWarning) && hasNoWarning

        if (hasNoWarning)
        {
            let isError = signup(first_name, last_name, email, password, re_password)
            setAccountCreated(!isError)
        }
    }

    if (isAuthenticated){
        return <Navigate to="/home/" replace={true}/>
    }
    if (accountCreated){
        return <Navigate to="/login/" replace={true}/>
    }
    return (
        <>
            {/* <div className="hor-flex-container input-div">
                <label htmlFor="phone">Phone</label>
                <input id="signup-form-phone" type="tel" placeholder="555 555 5555" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" onChange={e => onChange(e)} required/>
            </div> */}
            <h1>SIGN UP COURSERA</h1>
            
            <form>
                <div id="signup-form" className="info_container hor-center-element">
                    <div className="hor-flex-container input-div">
                        <label htmlFor="first name">First name</label>
                        <input type="text" placeholder="James" name="first_name" onChange={e => onChange(e)} required/>
                    </div>
                    <div className="hor-flex-container input-div">
                        <label htmlFor="last name">Last name</label>
                        <input type="text" placeholder="Anderson" name="last_name" onChange={e => onChange(e)} required/>
                    </div>

                    <div className="hor-flex-container input-div">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email@address.com" name="email" onChange={e => onChange(e)} required/>
                    </div>
                    <div className="hor-flex-container input-div">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={e => onChange(e)} required/>
                    </div>
                    <div className="hor-flex-container input-div">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="re_password" onChange={e => onChange(e)} required/>
                    </div>
                </div>

                <div id="sign-error-container" style={{"display": "none"}}><SignWarning /></div>
                <div id="email-empty-error-container" style={{"display": "none"}}><EmptyEmailWarning /></div>
                <div id="email-format-error-container" style={{"display": "none"}}><EmailFormatWarning /></div>
                
                <div id="password-empty-error-container" style={{"display": "none"}}><EmptyPasswordWarning /></div>
                <div id="password-length-error-container" style={{"display": "none"}}><PasswordLengthWarning /></div>

                <div id="password-match-error-container" style={{"display": "none"}}><PasswordMatchWarning /></div>

                <div className="hor-flex-container">
                    <button id="signup-button" className="form-button" onClick={e => onSubmit(e)}>SIGNUP</button>
                </div>
            </form>

            <div className="hor-flex-container">
                <label>ALREADY HAVE AN ACCOUNT? </label>
                <Link to='/login/'>
                    <u><p className="log-sign-label"> LOG IN</p></u>
                </Link>
            </div>
        </>
    )
} 

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup })(Signup)