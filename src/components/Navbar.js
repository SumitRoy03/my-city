import React from 'react'
const logo = require('../assets/ico.png')
const Navbar = () => {
  return (
    <div className='_navbar'>
        <div className='_icon'>
            <img src={logo} alt='icon'></img>
        </div>
        <div className='_heading'>
            My City
        </div>
    </div>
  )
}

export default Navbar