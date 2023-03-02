import React from 'react';
import { FaDownload } from 'react-icons/fa';
const CTA = () => {
  return (
    <div className="cta">
      <a href="https://drive.google.com/file/d/19V9kWZ-3K1o4khKvMP526Moh2fRERskP/view" target="_blank" rel="noreferrer" className="btn">
        Download CV <FaDownload/>
      </a>
    </div>
  );
};

export default CTA;
