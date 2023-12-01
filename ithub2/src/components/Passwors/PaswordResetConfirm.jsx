import { reset_password_confirm } from "../../actions/auth"

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

        // const uid = props.params.uid
        // const token = props.params.token
        console.log(uid, token, new_password, re_new_password)
        reset_password_confirm(uid, token, new_password, re_new_password)
        setRequestSent(true)
    }

    if (requestSent){
        return <Navigate to='/home/'/>
    }

    return (
        <>
            <h1>Request Password Reset</h1>
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

                
                <div className="hor-flex-container">
                    <button onClick={e => onSubmit(e)} className="form-button">RESET PASSWORD</button>
                </div>
            </form>
        </>
    )
}
    

export default connect(null, { reset_password_confirm })(PasswordResetConfirm)