import { Navigate, useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import {verify} from "../actions/auth"


const Activate = ({ verify }) => {
    let { uid, token } = useParams();
    const [verified, setVerified] = useState(false)

    const verify_account = e => {
        
        verify(uid, token)
        setVerified(true)
    }

    if (verified){
        return <Navigate to="/home/" replace={true}/>
    }

    return (
        <div className="body-container">
            <h1 className="fw-bold lh-1 my-3">Verify your Account</h1>

            <div className="hor-flex-container">
                <button className="form-button-alt" onClick={verify_account}>
                    Verify
                </button>
            </div>
        </div>
    )
    
}

export default connect(null, { verify })(Activate)