import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async(e) => {
    e.preventDefault();
      try {
        const responese=await axios.post("http://localhost:5000/api/login", formData)
        localStorage.setItem("userDetails", JSON.stringify(responese.data) )
        if (responese.status === 200 && 201) {
            alert("Login successFully")
        }else{
          alert("failed")
        }
      } catch (error) {
        console.error(error);
        
      }
  
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to Byte <span>Battles</span></h2>

        {error && <p className="error">{error}</p>}

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

        <button type="submit" className="btn login-btn">Log In</button>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
