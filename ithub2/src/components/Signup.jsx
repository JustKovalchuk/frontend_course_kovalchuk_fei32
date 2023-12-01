import {Link} from 'react-router-dom'

const Signup = () => 
    <>
        <h1>SIGN UP COURSERA</h1>

        <form>
            <div id="signup-form" className="info_container hor-center-element">
                <div className="hor-flex-container input-div">
                    <label htmlFor="first name">First name</label>
                    <input id="signup-form-first-name" type="text" placeholder="James" required/>
                </div>
                <div className="hor-flex-container input-div">
                    <label htmlFor="last name">Last name</label>
                    <input id="signup-form-last-name" type="text" placeholder="Anderson" required/>
                </div>

                <div className="hor-flex-container input-div">
                    <label htmlFor="email">Email</label>
                    <input id="signup-form-email" type="email" placeholder="email@address.com" required/>
                </div>
                <div className="hor-flex-container input-div">
                    <label htmlFor="phone">Phone</label>
                    <input id="signup-form-phone" type="tel" placeholder="555 555 5555" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" required/>
                </div>
                <div className="hor-flex-container input-div">
                    <label htmlFor="password">Password</label>
                    <input id="signup-form-password" type="password" required/>
                </div>
            </div>

            <div className="hor-flex-container">
                <button id="signup-button" className="form-button">SIGN UP</button>
            </div>
        </form>

        <div className="hor-flex-container">
            <label>ALREADY HAVE AN ACCOUNT? </label>
            <Link to='/login/'>
                <u><p className="log-sign-label"> LOG IN</p></u>
            </Link>
        </div>
        <script src="./user_auth.js"></script>
    </>

export default Signup