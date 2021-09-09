import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import perfil from '../images/perfil.jpg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import redux from '../images/redux.svg';
// import jest from '../images/jest.svg';
import mysql from '../images/mysql.svg';
import arrowdown from '../images/arrowdown.svg';
import { FcBinoculars } from "react-icons/fc";
import {Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-father">
      <Header />
      <h1>Hello there! I'm Victor Santiago</h1>
      <section className="section-container">
        <div>
          <h2>Passionate about technology and all of its vertents since a child, <br /> now studying everyday to be a Software Engineer</h2>
          <br />
          <h2>I'm a front-end developer, born and living in Brazil, wiling to work worldwide</h2>                
        </div>
        <div>
          <img src={perfil} alt="perfil" className="img-perfil" />
        </div>
      </section>
      <main className="main-container">
        <div className="sidenav">
          <h3>Knowledge</h3>
          <img src={arrowdown} alt="arrowdown"/>
        </div>
        <div className="know-item">
          <img src={html} alt="html" />
        </div>
        <div className="know-item">
          <img src={css} alt="css" />
        </div>
        <div className="know-item">
          <img src={javascript} alt="js" />
        </div>
        <div className="know-item">
          <img src={react} alt="react" />
        </div>
        <div className="know-item">
          <img src={redux} alt="redux" />
        </div>
        {/* <div className="know-item">
          <img src={jest} alt="jest" />
        </div> */}
        <div className="know-item">
          <img src={mysql} alt="mysql" />
        </div>
      </main>
      <div className="redirect-project">
          <div>
            <h2>I'm currently studying on <a href='https://www.betrybe.com/'><span className="trybe">Trybe</span></a> to be a Full Stack Developer </h2>
          </div>
          <div>
            <h2>You can see some of my projects here: <Link to="/projects"><FcBinoculars ></FcBinoculars></Link></h2>
          </div>
        </div>
      <Footer />
    </div>
  )
}
