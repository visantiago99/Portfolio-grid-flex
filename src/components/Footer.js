import React from 'react';
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer">
          <p>MADE WITH REACT, FLEXBOX AND GRID, BY VICTOR SANTIAGO </p>
          <a href='https://www.linkedin.com/in/victor-santiago-082542144/' target='_blank' rel='noreferrer'><SiLinkedin /></a>
          <a href='https://github.com/visantiago99' target='_blank' rel='noreferrer'><SiGithub /></a>
        </div>
  )
}
