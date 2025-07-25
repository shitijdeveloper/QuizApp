import React from 'react';
const Footer = () => {
    return (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Quiz<span>Hub</span></h2>
          <p>Test your knowledge and have fun with code!</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 QuizHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
    );
}

export default Footer;
