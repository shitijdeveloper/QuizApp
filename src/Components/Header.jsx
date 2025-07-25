import React from 'react';

const Header = () => {
    return (
  <header className="header">
    <div className="container">
      <div className="logo">
        <h1>Quiz<span>Hub</span></h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Quizzes</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Leaderboard</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="#" className="btn login">Log In</a>
        <a href="#" className="btn signup">Sign Up</a>
      </div>
    </div>
  </header>

    );
}

export default Header;
