import React from 'react'
import { GoMailRead } from 'react-icons/go'
import { BsTelegram, BsFillTelephoneOutboundFill } from 'react-icons/bs'

import './contact.css'

export const Contact = () => {
  return(
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Gleb Sokolov</h5>
            <a href='https://t.me/NinjsWay' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <GoMailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>g.sokolov@21vek.by</h5>
            <a href='mailto:g.sokolov@21vek.by' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsFillTelephoneOutboundFill className='contact__option-icon'/>
            <h4>Phone Number</h4>
            <span>
              <a href='tel:+375447209938'>+375(44)7209938</a>
            </span>
          </article>
        </div>
        <form action="">
          <input type='text' name='name' placeholder='You Full Name' required/>
          <input type='email' name='email' placeholder='You Email' required/>
          <textarea name='message' rows='7' placeholder='You Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
