import React from 'react'
import {MdEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import "./email.css"

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_y00utbr', 'template_7x1mjfl', form.current, 'V49FetJslzfWB65Sg')
        e.target.reset()
      };

    return (
        <div>
            <div className="email_container">
                <div className="contact_options">
                    <article className="contact_option">
                      <MdEmail className="contact_option-icon"/>    
                      <h4>E-mail</h4>    
                      <h5>paul.rohan540@gmail.com</h5>
                      <a href="mailto:paul.rohan540@gmail.com" target="_blank" rel="noreferrer">Send an e-mail</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your E-mail' required/>
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Your Message" required></textarea>
                    <button type='submit' className="message_button">Send Message</button>
                 </form>
            </div>
        </div>
    )
}

export default Email

