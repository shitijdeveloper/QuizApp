import "../Css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-bytebattles">
          <span className="byte">Byte</span>
          <span className="battles">Battles</span>
        </div>

        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">Quiz</Link></li>
            <li><Link to="/whyus">Why Us</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="btn login">Log In</Link>
          <Link to="/signup" className="btn signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
