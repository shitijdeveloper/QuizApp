import React, { useState, useEffect } from "react";
import "../Css/popup.css";

const PopupSignup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    onClose(); // close popup after submit
  };

  return (
    <div className="popup-backdrop">
      <div className="popup-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Sign Up for Byte <span>Battles</span></h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit" className="btn signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default PopupSignup;
