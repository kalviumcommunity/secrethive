import React from 'react'
import Logo from '../assets/Mainlogo.png'
import Navbar from '../Components/Navbar'
import '../Styles/Landing.css'
import Footer from '../Components/Footer';
import GetstartedButton from '../Components/GetstartedButton';

const Landing = () => {
  return (
    <div>
    <><Navbar/></>
    <div className='bodycontent'>
        <div className='logo'>
            <img src={Logo}/>
        </div>
        <div className='content'>
            <p> <a>SecretHive</a> is a website which is mainly focused on encryption and decryption of the data. The word "<a>secret</a>" emphasizes the importance of confidentiality, while "<a>hive</a>" implies a place of activity where you can find more than one way of securing data.
            <br/>We use advanced methods and algorithms for securing your data.</p>
        </div>
    </div>
    <><GetstartedButton /></>
    <><Footer/></>
    </div>
  )
}

export default Landing