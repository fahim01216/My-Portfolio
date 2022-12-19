import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Md Fahim</h1> 
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials />

        <div className='me'>
          <div className='me1'>
            <img src={ME} alt='me1' /> 
          </div>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header