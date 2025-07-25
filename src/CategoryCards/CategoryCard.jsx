import React from 'react';
import '../Css/Categorycard.css';

const categories = [
  { icon: 'fab fa-react', title: 'React JS', quizzes: 20 },
  { icon: 'fab fa-angular', title: 'Angular', quizzes: 15 },
  { icon: 'fab fa-vuejs', title: 'Vue JS', quizzes: 12 },
  { icon: 'fas fa-mobile-alt', title: 'React Native', quizzes: 10 },
  { icon: 'fas fa-code', title: 'Flutter', quizzes: 9 },
  { icon: 'fab fa-node-js', title: 'Node JS', quizzes: 18 },
  { icon: 'fas fa-forward', title: 'Next JS', quizzes: 8 },
];

const CategoryCard = () => {
  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-title">Popular JavaScript Frameworks</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <i className={`${cat.icon} category-icon`} />
              <h3>{cat.title}</h3>
              <p>{cat.quizzes} Quizzes</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
