import React, { useState } from "react";
import "../scss/_login.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log(`Login with username: ${username} and password: ${password}`);
  };

  return (
    <div className="login-container">
      <Header />
      <h1>Login</h1>
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
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={togglePasswordVisibility} className="toggle-password-button">
            {showPassword ? 'Hide' : 'Show'} Password
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
