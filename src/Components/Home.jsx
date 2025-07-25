import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import "../Css/style.css";
import Slider from './Slider';
import CategoryCard from '../CategoryCards/CategoryCard';
import PopupSignup from '../PoPup/Popup';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("signupShown");
    if (!alreadyShown) {
      setShowPopup(true);
      sessionStorage.setItem("signupShown", "true");
    }
  }, []);

  return (
    <div>
      <Slider />
      <CategoryCard />

      {showPopup && (
        <PopupSignup onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default Home;
