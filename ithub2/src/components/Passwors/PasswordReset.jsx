import { reset_password } from "../../actions/auth"

import { Navigate  } from 'react-router-dom'
import React, { useState } from 'react'
import { connect } from 'react-redux'

const PasswordReset = ({reset_password}) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData
    
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    const onSubmit = e => {
        e.preventDefault()

        reset_password(email)
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
                        <label htmlFor="email">Email</label>
                        <input placeholder="email@address.com" type="email" name="email" value={email} onChange={e => onChange(e)} required/>
                    </div>
                </div>
    
                <div className="hor-flex-container">
                    <button onClick={e => onSubmit(e)} className="form-button">RESET PASSWORD</button>
                </div>
            </form>
        </>
    )
}
    

export default connect(null, { reset_password })(PasswordReset)