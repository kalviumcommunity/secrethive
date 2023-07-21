import React from 'react'
import SmallLogo from '../assets/smalllogo.png'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
  const handleClick = () => {
    window.location.href = '/';
};
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={SmallLogo}  onClick={handleClick}/>
        </div>
        <div className='rightside'>
          <Link to="../Pages/About" className='link'>About</Link>
          <Link to="/Pages/Signin" className='link'>Sign in</Link>
          <Link to="/Pages/Signup" id='button'>Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar