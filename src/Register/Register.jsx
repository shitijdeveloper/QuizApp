import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Register.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      const { name, email, password,} = formData;

    if (!name || !email || !password ) {
      setError("All fields are required!");
      return;
    }
    const responese=await axios.post("http://localhost:5000/api/register",formData)
    if (responese.status === 200 && 201) {
      alert("success")
    }else{
      alert("failed")
    }
    navigate("/login");
    } catch (error) {
      
    }
    
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Create an Account</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

      

        <button type="submit" className="btn signup-btn">Sign Up</button>

        <p className="login-text">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
