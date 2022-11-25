import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>JUNAID SYED</a>
    
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/syedjunaid11"><FaFacebook/></a>
        <a href="https://instagram.com/ijunaidsyed"><FiInstagram/></a>
        <a href="https://twitter.com/JunaidAhmedSd"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Junaid Syed 2022. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer