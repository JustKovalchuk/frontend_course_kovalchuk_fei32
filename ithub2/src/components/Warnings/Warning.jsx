import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import warningIcon from "../../assets/icons/warning.png"

export const TryHideWarning = (сondition, elementID, hasNoWarning) => {
    if (сondition){
        if (hasNoWarning)
            document.getElementById(elementID).style.display = "block";
        return false
    }
    else
    {
        document.getElementById(elementID).style.display = "none";
        return true
    }
}

export const Warning = (props) => {
    return (
        <>
            <div className='error_container hor-center-element'>
                <Container>
                    <Row>
                        <Col fluid xs={3}>
                            <img className="icon" id="warning-icon" src={warningIcon} alt="warning icon"/>
                        </Col>
                        <Col fluid>
                            <b><p>{props.warningText}</p></b>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export const LoginWarning = () => <Warning warningText='There was a problem logging in! Check your email and password or create an account.'/>
export const SignWarning = () => <Warning warningText='Something went wrong! Check your data or try again later.'/>
export const ResetPasswordConfirmWarning = () => <Warning warningText='Something went wrong!'/>
export const EmptyEmailWarning = () => <Warning warningText='Email field is required!'/>
export const EmailFormatWarning = () => <Warning warningText='Email format is not correct!'/>
export const EmptyPasswordWarning = () => <Warning warningText='Password field is required!'/>
export const PasswordLengthWarning = () => <Warning warningText='Password length should be 6 or more characters!'/>
export const PasswordMatchWarning = () => <Warning warningText='Passwords not match!'/>
