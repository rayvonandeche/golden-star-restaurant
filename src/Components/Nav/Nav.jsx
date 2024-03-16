import React from 'react'
import '../Nav/Nav.css'
import background_img from '../../assets/pexels-ella-olsson-1640772.jpg'
import logo from '../../assets/logo.png'

function Nav() {
  return (
        <header className="nav">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="logo-txt">
                <p>Golden Star Restaurant</p>
            </div>
        </header>
  )
}

export default Nav