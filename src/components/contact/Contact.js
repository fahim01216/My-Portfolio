import React from 'react';
import './Contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {FaWhatsapp} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-item'/>
            <h4>Email</h4>
            <h5>fahim10839@gmail.com</h5>
            <a href='mailto:fahim10839@gmail.com' target={'_blank'}>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsInstagram className='contact_option-item'/>
            <h4>Instagram</h4>
            <a href='https://www.instagram.com/m_fahim012/' target={'_blank'}><h4>Send a message</h4></a>
          </article>

          <article className='contact_option'>
            <FaWhatsapp className='contact_option-item'/>
            <h4>WhatsApp</h4>
            <h5>+91-7870697471</h5>
            <a href='https://api.whatsapp.com/send?phone=917870697471' target={'_blank'}>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}

        <form action=''>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact;