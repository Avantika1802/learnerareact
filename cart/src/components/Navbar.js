import React, { useState } from 'react'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    
    <nav>
      <div className='nav_box'>
        <div className='my_shop'>
            My Shopping
        </div>
        <div className='cart'>
            <span>
            cart icon
            </span>
        </div>
      </div>  
    </nav>
  )
}

export default Navbar