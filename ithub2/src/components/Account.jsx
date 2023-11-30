import CourseBox from "./CourseBox/CourseBox"

import userIcon from "../assets/icons/user.svg"

function Account() {
    return (
        <>
            <h1>Profile</h1>
            <div>
                <h2>Account Info</h2>
                <div class="hor-center-element info_container">
                    <div class="center-box">
                        <img class="info_container-img" src={userIcon}  height="100" width="100"/>
                        <form action="index.php" method="post" title="userInfo">
                            <div class="hor-flex-container">
                                <label for="first name">First name</label>
                                <input type="text" id="first name" required/>
                            </div>
                            <div class="hor-flex-container input-div">
                                <label for="last name">Last name</label>
                                <input type="text" id="last name" required/>
                            </div>
                            <div class="hor-flex-container input-div">
                                <label for="username">Username</label>
                                <input type="text" id="username" required/>
                            </div>
                            <div class="hor-flex-container input-div">
                                <label for="email">Email</label>
                                <input type="email" id="email" required/>
                            </div>
                            <div class="hor-flex-container input-div">
                                <label for="phone">Phone</label>
                                <input type="tel" id="phone" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" required/>
                            </div>
                            <div class="hor-flex-container input-div">
                                <label for="password">Password</label>
                                <input type="password" id="password" required/>
                            </div>
                        </form>
                    </div>
                </div>
                    
                <div class="hor-flex-container">
                    <input class="form-button" type="reset"/>
                    <input class="form-button" type="submit"/>
                </div>
            </div>
            <div>
                <h2>My Courses</h2>
                <div class="hor-flex-container">
                    <CourseBox />
                    <CourseBox />
                    <CourseBox />
                    <CourseBox />
                </div>
                
            </div>
        </>
    );
}

export default Account