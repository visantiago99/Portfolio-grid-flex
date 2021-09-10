import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Header() {
  const[activeState, setActive] = useState(false);
  console.log(window.location.pathname)
  const location = window.location.pathname
  return (
    <div className="header">
      <div className="navbar">
          <button type="button" onClick={() => setActive(!activeState)} className="hamb-logo">
        <div className="hamburguer active">
        </div>
          </button>
        <ul className={activeState ? "menu active" : "menu"}>
          <Link to="/"><li><button className={location !== "/" ? "btn-header btn1" : "btn-header btn1 selected"} onClick={window.scrollTo(0,0)}>HOME</button></li></Link>
          <Link to="/projects"><li><button className={location !== "/projects" ? "btn-header btn1" : "btn-header btn1 selected"} onClick={window.scrollTo(0,0)}>PROJECTS</button></li></Link>
          <Link to="/contact"><li><button className={location !== "/contact" ? "btn-header btn1" : "btn-header btn1 selected"} onClick={window.scrollTo(0,0)}>CONTACT</button></li></Link>
        </ul>
      </div>
      <div className="social-icons">
        <div>
          <a href='https://www.linkedin.com/in/victor-santiago-082542144/' target='_blank' rel='noreferrer'><SiLinkedin /></a>
        </div>
        <div>
          <a href='https://github.com/visantiago99' target='_blank' rel='noreferrer'><SiGithub /></a>
        </div>
      </div>
    </div>
  )
}
