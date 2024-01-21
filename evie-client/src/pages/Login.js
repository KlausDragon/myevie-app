import React, { useState } from "react";
import "../scss/_login.scss";
import LineOfTrees from "../media/line-of-trees.svg";
import Footer from "../components/Footer";
import axios from "axios";
import { useContext } from 'react';
import { ProfileContext } from '../index';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const profileContext = useContext(ProfileContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (!username || !password) return;
    try {
      const result = await axios.post(`${process.env.REACT_APP_SERVER}/profile/login`, {
        user: username,
        pass: password
      });

      profileContext['first_name'] = result.data['firstName'];
      profileContext['last_name'] = result.data['lastName'];
      profileContext['experience'] = result.data['experience'];
      profileContext['level'] = result.data['level'];
      navigate('/challenges');
    } catch (err) {
      window.alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <img src={LineOfTrees} alt="Line of Trees" className="line-of-trees" />
      <form className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-password-button"
          >
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </label>
        <br />
        <button type="button" onClick={handleLogin} className="login-button">
          Login
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
