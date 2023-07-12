import React from 'react'
import SmallLogo from '../assets/smalllogo.png'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={SmallLogo}/>
        </div>
        <div className='rightside'>
          <Link to="../Pages/About.jsx" className='link'>About</Link>
          <Link to="../Pages/Signin.jsx" className='link'>Sign in</Link>
          <Link to="../Pages/Signup.jsx" id='button'>Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar