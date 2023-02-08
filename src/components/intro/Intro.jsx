import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Education</h5>
              <small>(B.S) in Computer Science</small>
            </article>
          </div>
          <p>I Graduated with a Bachelor of Science (B.S) in Computer Science and have over a year of Web Development experience. I am experienced in using HTML, CSS, Javascript, PHP, WordPress, and Mysql, I started learning ASP.Net, and MVC using C#. I also have experience in Game development using Unity creating Virtual reality Applications and games.</p>
          <a href="#contact" className="btn btn-primary talk">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro