import React from 'react';
import {Link} from 'react-router-dom';
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Header() {
  return (
    <div className="header">
      <div className="logo"></div>
      <ul className="menu">
        <Link to="/"><li><button className="btn-header">HOME</button></li></Link>
        <Link to="/projects"><li><button className="btn-header">PROJECTS</button></li></Link>
        <Link to="/contact"><li><button className="btn-header">CONTACT</button></li></Link>
      </ul>
      <div>
        <a href='https://www.linkedin.com/in/victor-santiago-082542144/' target='_blank' rel='noreferrer'><SiLinkedin /></a>
        <a href='https://github.com/visantiago99' target='_blank' rel='noreferrer'><SiGithub /></a>
      </div>
    </div>
  )
}
