import React from 'react';
/*import { FaLinkedinIn, FaReact, FaNodeJs, FaFilePdf } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiGithub, SiGmail } from 'react-icons/si';*/
import { FaLinkedinIn, FaFilePdf } from 'react-icons/fa'
import { SiGithub, SiGmail } from 'react-icons/si';
import cv from '../../assets/reports/CHRIS_ESSOMBA_CV.pdf';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Retrouvez moi sur</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" style={{ cursor: 'pointer' }}>
            <a href="https://github.com/ChrisEssomba" target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon" style={{ cursor: 'pointer' }}>
            <a href="mailto:chris.essomba357@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon" style={{ cursor: 'pointer' }}>
            <a href="https://www.linkedin.com/in/chris-essomba-360780242/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon" style={{ cursor: 'pointer' }}>
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <FaFilePdf />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
