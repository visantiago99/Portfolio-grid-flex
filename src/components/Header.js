import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Header() {
  const[activeState, setActive] = useState(false);


  return (
    <div className="header">
      <div className="navbar">
          <button type="button" onClick={() => setActive(!activeState)} className="hamb-logo">
        <div className="hamburguer active">
        </div>
          </button>
        <ul className={activeState ? "menu active" : "menu"}>
          <NavLink to="/" activeClassName="selected"><li><button className="btn-header btn1" onClick={window.scrollTo(0,0)}>HOME</button></li></NavLink>
          <NavLink to="/projects" activeClassName="selected"><li><button className="btn-header btn1" onClick={window.scrollTo(0,0)}>PROJECTS</button></li></NavLink>
          <NavLink to="/contact" activeClassName="selected"><li><button className="btn-header btn1" onClick={window.scrollTo(0,0)}>CONTACT</button></li></NavLink>
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
