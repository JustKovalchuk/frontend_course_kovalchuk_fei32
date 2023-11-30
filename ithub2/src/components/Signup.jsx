import {Link} from 'react-router-dom'

const Signup = () => 
    <>
        <h1>SIGN UP COURSERA</h1>

        <form>
            <div id="signup-form" class="info_container hor-center-element">
                <div class="hor-flex-container input-div">
                    <label for="first name">First name</label>
                    <input id="signup-form-first-name" type="text" placeholder="James" required/>
                </div>
                <div class="hor-flex-container input-div">
                    <label for="last name">Last name</label>
                    <input id="signup-form-last-name" type="text" placeholder="Anderson" required/>
                </div>

                <div class="hor-flex-container input-div">
                    <label for="email">Email</label>
                    <input id="signup-form-email" type="email" placeholder="email@address.com" required/>
                </div>
                <div class="hor-flex-container input-div">
                    <label for="phone">Phone</label>
                    <input id="signup-form-phone" type="tel" placeholder="555 555 5555" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" required/>
                </div>
                <div class="hor-flex-container input-div">
                    <label for="password">Password</label>
                    <input id="signup-form-password" type="password" required/>
                </div>
            </div>

            <div class="hor-flex-container">
                <button id="signup-button" class="form-button">SIGN UP</button>
            </div>
        </form>

        <div class="hor-flex-container">
            <label>ALREADY HAVE AN ACCOUNT? </label>
            <Link to='/login/'>
                <u><p class="log-sign-label"> LOG IN</p></u>
            </Link>
        </div>
        <script src="./user_auth.js"></script>
    </>

export default Signup