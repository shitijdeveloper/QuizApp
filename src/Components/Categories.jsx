import React from 'react';
import "../Css/CategoriePage.css"
const Categories = () => {
    return (
    <div>
  <aside className="sidebar">
    <h2>Categories</h2>
    <div className="search-box">
      <input type="text" id="searchInput" placeholder="Search categories..." />
      <i className="fas fa-search" />
    </div>
    <ul className="category-list" id="categoryList">
      <li className="active">All</li>
      <li>React JS</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>React Native</li>
      <li>Vue.js</li>
      <li>Flutter</li>
      <li>Angular</li>
      <li>Git &amp; GitHub</li>
    </ul>
  </aside>
  <main className="main-content">
    <h1><i className="fas fa-th-large" /> Quiz Categories</h1>
    <div className="category-grid" id="categoryGrid">
      <div className="category-card" data-category="React JS">
        <i className="fab fa-react" />
        <h3>React JS</h3>
        <p>12 Quizzes</p>
      </div>
      <div className="category-card" data-category="JavaScript">
        <i className="fab fa-js-square" />
        <h3>JavaScript</h3>
        <p>15 Quizzes</p>
      </div>
      <div className="category-card" data-category="Node.js">
        <i className="fab fa-node-js" />
        <h3>Node.js</h3>
        <p>8 Quizzes</p>
      </div>
      <div className="category-card" data-category="React Native">
        <i className="fas fa-mobile-alt" />
        <h3>React Native</h3>
        <p>10 Quizzes</p>
      </div>
      <div className="category-card" data-category="Vue.js">
        <i className="fab fa-vuejs" />
        <h3>Vue.js</h3>
        <p>7 Quizzes</p>
      </div>
      <div className="category-card" data-category="Flutter">
        <i className="fab fa-android" />
        <h3>Flutter</h3>
        <p>9 Quizzes</p>
      </div>
      <div className="category-card" data-category="Angular">
        <i className="fab fa-angular" />
        <h3>Angular</h3>
        <p>6 Quizzes</p>
      </div>
      <div className="category-card" data-category="Git & GitHub">
        <i className="fas fa-code-branch" />
        <h3>Git &amp; GitHub</h3>
        <p>5 Quizzes</p>
      </div>
    </div>
  </main>
</div>

    );
}

export default Categories;
