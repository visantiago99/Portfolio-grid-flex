import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6tpnpgm', 'template_0q4ch9u', e.target, 'user_TaVJZ7HjIo1atAK5ecLNK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="inpt1">
      <p>Name:</p>
      <label className="form-label">
      <input type="text" name="name" />
      </label>
      </div>
      <br />
      <div className="inpt1">
      <p>Email:</p>
      <label className="form-label">
      <input type="email" name="email" />
      </label>
      </div>
      <br />
      <div className="inpt1">
      <p>Subject:</p>
      <label className="form-label">
      <input type="text" name="subject" />
      </label>
      </div>
      <br />
      <br />
      <div className="inpt1">
        <textarea name="message" placeholder='Your message'/>
      </div>
      <br />
      <input type="submit" value="Send" className="btn-header btn1" onClick={() => alert('Your message has been send!')} />
    </form>
  );
}