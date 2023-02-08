import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaItchIo } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/joussef-calderon-57597294/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Joussef-C" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://mafia0italy.itch.io/" target="_blank" rel="noreferrer" ><FaItchIo /></a>
    </div>
  )
}

export default HeaderSocials