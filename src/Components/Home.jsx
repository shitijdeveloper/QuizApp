import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../Css/style.css"
const Home = () => {
return (
<div>
<Header></Header>
  <section className="slider">
    <div className="container">
      <div className="slider-content">
        <h2>Test Your Knowledge in JS Frameworks</h2>
        <p>Choose a framework and take a quiz to sharpen your skills!</p>
        <a href="#" className="btn start-quiz">Start a Quiz</a>
      </div>
    </div>
  </section>
  {/* Categories Section */}
  <section className="categories">
    <div className="container">
      <h2>Popular JavaScript Frameworks</h2>
      <div className="category-grid">
        <div className="category-card">
          <i className="fab fa-react" />
          <h3>React JS</h3>
          <p>20 Quizzes</p>
        </div>
        <div className="category-card">
          <i className="fab fa-angular" />
          <h3>Angular</h3>
          <p>15 Quizzes</p>
        </div>
        <div className="category-card">
          <i className="fab fa-vuejs" />
          <h3>Vue JS</h3>
          <p>12 Quizzes</p>
        </div>
        <div className="category-card">
          <i className="fas fa-mobile-alt" />
          <h3>React Native</h3>
          <p>10 Quizzes</p>
        </div>
        <div className="category-card">
          <i className="fas fa-code" />
          <h3>Flutter</h3>
          <p>9 Quizzes</p>
        </div>
        <div className="category-card">
          <i className="fab fa-node-js" />
          <h3>Node JS</h3>
          <p>18 Quizzes</p>
        </div>
        <div className="category-card">
          <i className="fas fa-forward" />
          <h3>Next JS</h3>
          <p>8 Quizzes</p>
        </div>
      </div>
    </div>
  </section>
   <Footer></Footer>
</div>


    );
}

export default Home;
