import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/quiz.css";

const QuizStart = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz/start");
  };

  return (
    <div className="quiz-start-container">
      <h2>Welcome to the Byte <span>Battles</span> Quiz!</h2>
      <p>Test your JavaScript skills in this timed challenge!</p>
      <button className="btn start-btn" onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default QuizStart;
