import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h2>
            Byte <span>Battles</span>
          </h2>
          <p>Test your knowledge and have fun with code!</p>
          <p className="made-love">Made with ❤️ for developers</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quizzes</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Get weekly updates about new quizzes & features!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div> */}

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-github" /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2024 ByteBattles. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
