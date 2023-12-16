import { reset_password_confirm, is_password_valid } from "../../actions/auth"

import { EmptyPasswordWarning, PasswordLengthWarning, PasswordMatchWarning, TryHideWarning, ResetPasswordConfirmWarning } from '../Warnings/Warning';

import { Navigate, useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { connect } from 'react-redux'

const PasswordResetConfirm = ({props, reset_password_confirm}) => {
    
    let { uid, token } = useParams();
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData
    
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    const onSubmit = e => {
        e.preventDefault()

        let hasNoWarning = true

        TryHideWarning(false, "password-reset-confirm-error-container", hasNoWarning)

        hasNoWarning = TryHideWarning(new_password == '', "password-empty-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(!is_password_valid(password), "password-length-error-container", hasNoWarning) && hasNoWarning
        hasNoWarning = TryHideWarning(new_password != re_new_password, "password-match-error-container", hasNoWarning) && hasNoWarning
        if (hasNoWarning)
        {
            let isError = reset_password_confirm(uid, token, new_password, re_new_password)
            console.log(isError)
            setRequestSent(!isError)
        }
    }

    if (requestSent){
        return <Navigate to='/home/'/>
    }

    return (
        <>
            <div className="body-container">
                <h1 className="fw-bold lh-1 my-3">Password Reset</h1>
                <form>
                    <div id="login-form" className="info_container hor-center-element">
                        <div className="hor-flex-container input-div">
                            <label htmlFor="new_password">New Password</label>
                            <input type="password" name='new_password' value={new_password} onChange={e => onChange(e)} minLength="6" required/>
                        </div>
                        <div className="hor-flex-container input-div">
                            <label htmlFor="re_new_password">Confirm New Password</label>
                            <input type="password" name='re_new_password' value={re_new_password} onChange={e => onChange(e)} minLength="6" required/>
                        </div>
                    </div>
                    <div id="password-reset-confirm-error-container" style={{"display": "none"}}><ResetPasswordConfirmWarning /></div>
                    <div id="password-empty-error-container" style={{"display": "none"}}><EmptyPasswordWarning /></div>
                    <div id="password-length-error-container" style={{"display": "none"}}><PasswordLengthWarning /></div>

                    <div id="password-match-error-container" style={{"display": "none"}}><PasswordMatchWarning /></div>
                    
                    <div className="hor-flex-container">
                        <button onClick={e => onSubmit(e)} className="form-button">RESET PASSWORD</button>
                    </div>
                </form>
            </div>
        </>
    )
}
    

export default connect(null, { reset_password_confirm })(PasswordResetConfirm)