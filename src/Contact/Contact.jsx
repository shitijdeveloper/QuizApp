import React from 'react';
import "../Css/contact.css"
const Contact = () => {
    return (   
  <div>
  {/* Hero */}
  <section className="hero">
    <div className="container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Reach out with any questions or suggestions!</p>
    </div>
  </section>
  {/* Contact Section */}
  <section className="contact-section">
    <div className="container">
      <h2>Get in Touch</h2>
      <div className="contact-grid">
        {/* Contact Form */}
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" required defaultValue={""} />
          <button type="submit">Send Message</button>
        </form>
        {/* Google Map */}
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609835183!2d72.7410987769395!3d19.08219783959551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c3fbbf149%3A0xc0a8df9073c7c5f6!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629188217480!5m2!1sen!2sin" allowFullScreen loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}

export default Contact;
