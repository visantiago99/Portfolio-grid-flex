import React from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import { SiLinkedin, SiGithub } from "react-icons/si";


export default function Contact() {
  return (
    <div>
      <Header />
      <h1>You can reach me here:</h1>
      <br />
      <div className="divSocialContact">
          <a href='https://www.linkedin.com/in/victor-santiago-082542144/' target='_blank' rel='noreferrer'><SiLinkedin /></a>
          <a href='https://github.com/visantiago99' target='_blank' rel='noreferrer'><SiGithub /></a>
        </div>
      <ContactUs />
    </div>
  )
}
