import React from 'react';
import "../Css/about.css"
const About = () => {
    return (
   <div>
  <section className="hero">
    <div className="container">
      <h1>About Us</h1>
      <p>Get to know more about QuizHub — your ultimate knowledge testing platform!</p>
    </div>
  </section>
  {/* About Info */}
  <section className="about-section">
    <div className="container">
      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>QuizHub is a modern platform designed for curious minds and passionate learners. Whether you want to test your knowledge, challenge friends, or simply learn something new — we’ve got you covered!</p>
          <h2>Our Mission</h2>
          <p>Our mission is to make learning engaging and fun. Through interactive quizzes and diverse categories, we aim to help users enhance their knowledge while enjoying the process.</p>
        </div>
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" alt="Team at work" />
        </div>
      </div>
    </div>
  </section>
  {/* Why Choose Us */}
  <section className="why-us">
    <div className="container">
      <h2>Why Choose QuizHub?</h2>
      <div className="why-grid">
        <div className="why-card">
          <i className="fas fa-lightbulb" />
          <h4>Interactive Learning</h4>
          <p>Fun and challenging quizzes that keep you engaged.</p>
        </div>
        <div className="why-card">
          <i className="fas fa-users" />
          <h4>Community Driven</h4>
          <p>Join thousands of learners and share your results.</p>
        </div>
        <div className="why-card">
          <i className="fas fa-cogs" />
          <h4>Variety of Topics</h4>
          <p>From coding to current affairs — something for everyone.</p>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}

export default About;
