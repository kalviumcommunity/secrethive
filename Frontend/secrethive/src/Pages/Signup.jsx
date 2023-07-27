import React from 'react'
import SideDiv from '../Components/SideDiv'
import { Link } from 'react-router-dom'
import '../Styles/Sign.css'

const Signup = () => {
  return (
    <div className='siginupmaindiv'>
        <SideDiv/>
      <div className='signupsubdiv2'>
        <div className='signupdiv21'><p>Sign up!</p></div>
        <div className='signupdiv22'>
          <form>
            <label for="nameinp">Name:</label><br/>
            <input type="text" id="nameinp" placeholder='Enter your name' required/><br/>
            <label for="emailinp">Email:</label><br/>
            <input type="email" id="emailinp" placeholder='Enter your email' required/><br/>
            <label for="passwordinp">New password:</label><br/>
            <input type="password" id="passwordinp" placeholder='Enter new password' required/><br/>
            <label for="repasswordinp">Re-enetr password:</label><br/>
            <input type="password" id="repasswordinp" placeholder='Re-enter the password' required/><br/>
            <button type='submit'><Link className='link' to=''> Sign up </Link></button>
          </form>
        </div>
        <div className='signupsubdiv3'>
          <p>Already have an account?<b><Link className='link' to='../Pages/Signin'>Sign in!</Link></b></p>
      </div>
      </div>
    </div>
  )
}

export default Signup