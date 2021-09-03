import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { SiLinkedin, SiGithub } from "react-icons/si";


export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1>You can send me a email:</h1>
        <ContactUs />
        <h1>You can also reach me here:</h1>
        <div className="divSocialContact">
          <a href='https://www.linkedin.com/in/victor-santiago-082542144/' target='_blank' rel='noreferrer'><SiLinkedin /></a>
          <a href='https://github.com/visantiago99' target='_blank' rel='noreferrer'><SiGithub /></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
