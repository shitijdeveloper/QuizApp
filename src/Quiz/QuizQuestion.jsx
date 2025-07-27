import React, { useState } from "react";
import "../Css/quiz.css";

const questions = [
  {
    id: 1,
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["22", "4", "NaN", "Error"],
    answer: "22",
  },
  {
    id: 2,
    question: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    id: 3,
    question: "Which method is used to parse JSON strings?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "parse.JSON()"],
    answer: "JSON.parse()",
  },
];

const QuizQuestions = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-box">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div className="question-box">
          <h3>
            Q{current + 1}. {questions[current].question}
          </h3>
          <div className="options">
            {questions[current].options.map((opt, idx) => (
              <button key={idx} className="option-btn" onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestions;
