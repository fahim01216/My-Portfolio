import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/md-fahim-34977a170/'><BsLinkedin /></a>
        <a href='https://github.com/fahim01216'><BsGithub /></a>
        <a href='https://www.instagram.com/m_fahim012/'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials