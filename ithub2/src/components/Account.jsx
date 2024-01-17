import CourseBox from "./CourseBox/CourseBox"

import userIcon from "../assets/icons/user.svg"
import { connect } from 'react-redux'

function Account({user}) {
    console.log("user", user)
    return (
        <div className="body-container">
            <h1 className="fw-bold lh-1 my-3">Profile</h1>
            <div>
                <h2>Account Info</h2>
                <div className="hor-center-element info_container">
                    <div className="hor-flex-container">
                        <img className="info_container-img" src={userIcon}/>
                    </div>
                    <form action="index.php" method="post" title="userInfo">
                        <div className="input-div">
                            <label for="first name">First name</label>
                            <input type="text" id="first name" required disabled value={user["first_name"]}/>
                        </div>
                        <div className="input-div">
                            <label for="last name">Last name</label>
                            <input type="text" id="last name" required disabled value={user["last_name"]}/>
                        </div>
                        <div className="input-div">
                            <label for="email">Email</label>
                            <input type="email" id="email" required disabled value={user["email"]}/>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h2>My Courses</h2>
                <div className="hor-flex-container">
                    {/* <CourseBox />
                    <CourseBox />
                    <CourseBox />
                    <CourseBox /> */}
                </div>
                
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.auth.user[0]
})

export default connect(mapStateToProps)(Account)
// export default Account