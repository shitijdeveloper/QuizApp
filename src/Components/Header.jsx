import "../Css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userDetails"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    setUser(null);
    navigate("/login");
  };

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
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/whyus">Why Us</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          {user ? (
            <>
              <span className="username">👋 {user.name || user.email}</span>
              <button className="btn logout" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn login">Log In</Link>
              <Link to="/signup" className="btn signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
