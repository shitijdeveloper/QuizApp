import React, { useState, useEffect } from "react";
import "../Css/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Quiz Burst - React Edition",
      subtitle: "Challenge Your Knowledge with Live React Quizzes",
      description:
        "Welcome to the ultimate React quiz app! Dive into hooks, components, and state logic. Whether you're a beginner or a pro, test your understanding and level up now!",
      buttonText: "Start React Quiz Now",
      iconUrl: "/images/Google_AI_Studio_2025-07-25T08_43_18.272Z.png",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      title: "All Language Quiz Testing",
      subtitle: "Practice JavaScript, Python, C++, Java & More",
      description:
        "Sharpen your skills in multiple languages. Attempt real-world coding MCQs & get detailed results. Perfect for interviews, learning, and skill-building!",
      buttonText: "Try Global Quiz Challenge",
      iconUrl: "/images/Google_AI_Studio_2025-07-25T08_39_57.399Z.png",
      difficulty: "Multi-level",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <>
      {/* ✅ Notification Marquee */}
      <div className="marquee-bar">
        <div className="marquee-content">
          🚀 New! Full-stack Quiz Challenge Live | 💡 React + JavaScript Quizzes Updated | 🎉 Score & Rank Features Coming Soon!
        </div>
      </div>

      <section className="slider-section">
        <div className="slider-container">
          <div className="slide-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <div className="slide-gradient">
                  <div className="slide-left">
                    <div className="slide-label">{slide.difficulty} Level</div>
                    <h2 className="slide-title">{slide.title}</h2>
                    <h3 className="slide-subtitle">{slide.subtitle}</h3>
                    <p className="slide-description">{slide.description}</p>
                    <button className="slide-button">{slide.buttonText}</button>
                  </div>

                  <div className="slide-right">
                    <div className="slide-image-box">
                      <img
                        src={slide.iconUrl}
                        alt={slide.title}
                        onLoad={() =>
                          console.log("✅ Image loaded successfully:", slide.iconUrl)
                        }
                        onError={() =>
                          console.log("❌ Image failed to load:", slide.iconUrl)
                        }
                        className="slide-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className="arrow-button arrow-left">◀</button>
          <button onClick={nextSlide} className="arrow-button arrow-right">▶</button>

          <div className="dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentSlide ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
