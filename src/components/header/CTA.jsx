import React from 'react';
import { FaDownload } from 'react-icons/fa';
const CTA = () => {
  return (
    <div className="cta">
      <a href="https://drive.google.com/file/d/1G6BU6kdZG1bbjVzdqA9yETfYwdeXTl0_/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">
        Download CV <FaDownload/>
      </a>
    </div>
  );
};

export default CTA;
