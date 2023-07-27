import React from 'react'
import SideDiv from '../Components/SideDiv'
import { Link } from 'react-router-dom'
import '../Styles/Sign.css'

const Signin = () => {
  return (
    <div className='sigininmaindiv'>
        <SideDiv/>
      <div className='signinsubdiv2'>
        <div className='signindiv21'><p>Sign in!</p></div>
        <div className='signindiv22'>
          <form>
            <label for="snameinp">Name:</label><br/>
            <input type="text" id="snameinp" placeholder='Enter your name' required/><br/>
            <label for="semailinp">Email:</label><br/>
            <input type="email" id="semailinp" placeholder='Enter your email' required/><br/>
            <div id='signindfp'>
              <label for="spasswordinp">Password:</label><br/>
              <input type="password" id="spasswordinp" placeholder='Enter your password' required/><br/>
              <p id='signinfp'><Link to='' className='link'>forgot password?</Link></p>
            </div>
            <button type='submit'><Link to='' id='slink'>Sign in</Link></button>
          </form>
        </div>
        <div className='signinsubdiv3'>
          <p>Don't have an account?<b><Link to='../Pages/Signup' className='link'>Sign up!</Link></b></p>
      </div>
      </div>
    </div>
  )
}

export default Signin