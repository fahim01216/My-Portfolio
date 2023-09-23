import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#project'>Project</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><FaInstagram/></a>
        <a href='https://api.whatsapp.com/send?phone=917870697471'><FaWhatsapp/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; @fahim. All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer