import React, { useRef } from 'react'
import './Contact.css'
import li from '../../Assets/link.png'
import insta from '../../Assets/insta.png'
import mail from '../../Assets/mail.png'
import wp from '../../Assets/wp.png'
import git from '../../Assets/git.png'
import emailjs from '@emailjs/browser';


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6vbwe9b', 'template_2qx7v1a', form.current, {
            publicKey: '6QsspKOGD2wpm6Zaw',
          })
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Your response shared successfully....')
            },
            (error) => {
              console.log(error.text);
            },
          );
      };

  return (
    <section id="contactPage">

        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fil out the form below to ask any queries or discuss any work oppurtunities</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea name="message" rows="5" className="msg" placeholder='Your Message' ></textarea>
                <button type='submit' value='send' className="submitBtn">ASK !!!</button>
                <div className="links">
                 <a href="https://www.linkedin.com/feed/?trk=404_page"><img src={li} alt="linkedin" className="link" /></a> 
                 <a href="https://www.instagram.com/mr_abhi_jith_/#"><img src={insta} alt="instagram" className="link" /></a> 
                 <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"> <img src={mail} alt="mail" className="link" /></a> 
                 <a href="https://wa.me/+917025864355"> <img src={wp} alt="whatsapp" className="link"  /></a> 
                 <a href="https://github.com/AbhijithAravindakshan"><img src={git} alt="github" className="link" />  </a>   
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact