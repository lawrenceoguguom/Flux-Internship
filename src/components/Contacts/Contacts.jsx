import React, { useState } from 'react'
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './Contacts.css'
const Contacts = () => {
        const [name, setName] = useState("");
        const [message, setMesssage] = useState("");
        const maxChars = 300;

  return (

    <div className='contacts'>
        <h2>Let'S Connect..</h2>
    <div className="contacts-description">
      <div className="contact-left">
            <div className="contact-left-text">
                <h4>Look no further, your trusted ICT and technology leadership expert is here</h4>
                <p>With a proven track record of delivering scalable ICT solutions and driving 
                cross-functional technology initiatives,We deliver innovative software development services 
                and custom digital solutions that help businesses streamline operations. <br /> <br />
                <span style={{color: '#e4d0c8', fontWeight: '700'}}>ARE YOU READY TO COLLABORATE?</span> 
                </p>

                <h5>Connect <span>with us</span> to craft bold digital experiences that move with the world.</h5>
            </div>

            <div className="contact-left-social">
                <a href="https://www.linkedin.com/in/fluxcreativetechnologies/" target="_blank" rel="noopener noreferrer"> 
                <FaLinkedin size={25} color='#0077B5' className='linkedin' /></a>
                <a href="https://www.instagram.com/fluxcreativetechnologies/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} color='#E1306C' fontWeight={700} className='instagram' /></a>
                <a href="https://wa.me/2347069918965" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={25} color='#25D366' className='whatsapp' /></a>   
            </div> 
        </div>

        <div className="contact-right">
            <div className="contact-form">
                <h4>SEND US A MESSAGE.</h4>
                <form className='form-flux' >
                    <input type="text" name="name" placeholder='Enter Your Name' required />
                    <input type="email" name="email" placeholder='Enter Your Email' required />
                    <textarea 
                    name="message" 
                    id="message"
                    rows={15}
                    placeholder='Enter Message'
                    onChange={(e)=> e.target.value.length 
                    <= maxChars &&  setMessage(e.target.value)}                    
                    required
                    />   
                    <p style={{ color: message.length > maxChars ? "red" : "#e4d0c8", fontSize: "16px", fontWeight: 700 }} >
                      {message.length}/{maxChars} characters
                    </p>              
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Contacts
