import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
