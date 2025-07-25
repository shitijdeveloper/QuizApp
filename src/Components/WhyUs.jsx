import React from "react";
import "../Css/WhyUs.css";

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <h2 className="whyus-heading">Why Choose <span>Byte Battles</span>?</h2>
      <div className="whyus-grid">
        <div className="whyus-card">
          <h3>🔥 Real-World Challenges</h3>
          <p>Practice with real coding problems that help you become job-ready and interview-ready.</p>
        </div>
        <div className="whyus-card">
          <h3>📊 Track Your Progress</h3>
          <p>Keep an eye on your strengths and weaknesses with our detailed progress analytics.</p>
        </div>
        <div className="whyus-card">
          <h3>⚔️ Compete With Others</h3>
          <p>Join coding battles, leaderboards, and quizzes to test your skills against others.</p>
        </div>
        <div className="whyus-card">
          <h3>💡 Learn While Playing</h3>
          <p>Our gamified platform makes learning fun and addictive, not boring!</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
