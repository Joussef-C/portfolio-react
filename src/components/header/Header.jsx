import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Joussef Calderon</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};
export default Header;
