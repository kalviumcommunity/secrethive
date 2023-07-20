import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import '../Styles/GetstartedButton.css'

const GetstartedButton = () => {
    const handleClick = () => {
        window.location.href = '../Pages/Signup';
    };
    
  return (
    <div id='body'>
        <button className='getStartedButton' onClick={handleClick}>
            <div className='fill'>
                <div id='getbutton'>Get started!</div>
                <div id='arrow'><EastOutlinedIcon/></div>
            </div>
        </button>
    </div>
  )
}

export default GetstartedButton