import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaItchIo } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">J_C</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/joussef-calderon-57597294/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Joussef-C" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://mafia0italy.itch.io/" target="_blank" rel="noreferrer" ><FaItchIo /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; JC 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer