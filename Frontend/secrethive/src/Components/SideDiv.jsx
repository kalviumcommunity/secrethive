import React from 'react'
import Logo from '../assets/whiteLogo.png'
import '../Styles/SideDiv.css'

const SideDiv = () => {
  const handleClick = () => {
      window.location.href = '/';
  };
  return (
    <div className='md'>
        <div className='ls'>
            <img src={Logo} onClick={handleClick}/>
            <h1 id='hh'>Protect your data</h1>
            <p id='pp'>In today's digital world, data is constantly being generated, stored, and transmitted, with the increasing threat of cyberattacks and data breaches. Organizations and individuals must be proactive in implementing effective security measures to protect their data and systems from unauthorized users. </p>
        </div>
    </div>
  )
}

export default SideDiv