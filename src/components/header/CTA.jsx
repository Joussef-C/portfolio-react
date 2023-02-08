import React from 'react';
import { FaDownload } from 'react-icons/fa';
const CTA = () => {
  return (
    <div className="cta">
      <a href="https://drive.google.com/file/d/1Sm62TaaBZrJzrwJRzUAE1QkWSY1p_Gdv/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">
        Download CV <FaDownload/>
      </a>
    </div>
  );
};

export default CTA;
