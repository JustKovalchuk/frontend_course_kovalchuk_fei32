import Header from "./components/Header"
import Footer from "./components/Footer"
import MainPage from "./components/MainPage";
import Courses from "./components/Courses"
import CoursePage from "./components/CoursePage/CoursePage";
import Account from "./components/Account"
import Login from "./components/Login"
import Signup from "./components/Signup"
import PasswordReset from "./components/Passwors/PasswordReset";
import PasswordResetConfirm from "./components/Passwors/PaswordResetConfirm";

import { Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from "./store";

import "./alignment.css"

function App() {
    return (
        <>
        <Header></Header>
        <Provider store={store}>
            <Routes>
                <Route path='/' >
                    <Route index element={<MainPage />} />
                </Route>
                <Route path='/course/' >
                    <Route index element={<CoursePage />} />
                </Route>
                <Route path='/home/' element={<MainPage />} />
                <Route path='/courses/' element={<Courses />} />
                <Route path='/login/' element={<Login />} />
                <Route path='/signup/' element={<Signup />} />
                <Route path='/reset-password/' element={<PasswordReset />} />
                <Route path='/password/reset/confirm/:uid/:token' element={<PasswordResetConfirm />} />
                <Route path='/activate/:uid/:token' element={<Signup />} />


                <Route path='/account/' element={<Account />} />
            
            </Routes>
        </Provider>

        <Footer></Footer>
        </>
        
      );
}

export default App
