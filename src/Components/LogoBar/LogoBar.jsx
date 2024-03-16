import React from 'react'
import './LogoBar.css'
import background_img from '../../assets/pexels-ella-olsson-1640772.jpg'
import logo from '../../assets/logo.png'

function LogoBar() {
  return (
    <>
    <div className="container">
      <div className="welcome">
        <div className="welcome-text">
          <img className='bg img-fluid' src={background_img} alt="" />
        </div>

        <div className="row">
          <img src={logo} alt="" />
          <p className="golden-star">Golden Star Restaurant</p>
        </div>
        
      </div>
    </div>

    <header className="navbar">
        <a href="#" class="logo">
          <img src="logo.png" alt="Logo"/>
        </a>
        <nav class="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="menu-toggle">
            <i className="fas fa-bars"></i> </button>
        </nav>
      </header>
    </>
  )
}

export default LogoBar