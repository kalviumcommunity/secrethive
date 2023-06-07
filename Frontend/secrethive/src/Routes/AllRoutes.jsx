import React from 'react';
import {Route,Routes} from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import HomePage from '../Components/HomePage';
import SignupPage from "../Components/SignupPage"
import SigninPage from "../Components/SigninPage";
import AboutPage from '../Components/AboutPage';
import EncryptionPage from '../Components/EncryptionPage';
import DecryptionPage from "../Components/DecryptionPage";
import EncryptionkeyPage from '../Components/EncryptionKeyPage';
import DecryptionkeyPage from '../Components/DecryptionKeyPage';
import ForgotpasswordPage from "../Components/ForgotpasswordPage";
import VerificationPage from "../Components/VerificationPage";



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/' element={<SignupPage/>}></Route>
            <Route path='/' element={<SigninPage/>}></Route>
            <Route path='/' element={<AboutPage/>}></Route>
            <Route path='/' element={<EncryptionPage/>}></Route>
            <Route path='/' element={<DecryptionPage/>}></Route>
            <Route path='/' element={<EncryptionkeyPage/>}></Route>
            <Route path='/' element={<DecryptionkeyPage/>}></Route>
            <Route path='/' element={<ForgotpasswordPage/>}></Route>
            <Route path='/' element={<VerificationPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes