import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cd85hm2', 'template_5ebo0vd', form.current, 'iW-HwvFpTYdVksDwJ')
  
    e.target.reset()
  };
    

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sjunaid626@gmail.com</h5>
            <a href="mailto:sjunaid626@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Junaid A Syed</h5>
            <a href="https://m.me/syedjunaid11" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+918379067494</h5>
            <a href="https://api.whatsapp.com/send?phone=918379067494" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name Here' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact