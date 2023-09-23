import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/md-fahim-34977a170/'><BsLinkedin /></a>
        <a href='https://github.com/fahim01216'><BsGithub /></a>
        <a href='https://leetcode.com/fahim01216/'><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials