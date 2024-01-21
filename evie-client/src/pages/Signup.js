import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../scss/_signup.scss";
import Footer from "../components/Footer";
import LineOfTrees from "../media/line-of-trees.svg";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confpassword, setConfpassword] = useState("");
  const [showconfpassword, setshowconfpassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleconfPasswordVisibility = () => {
    setshowconfpassword(!showconfpassword);
  };

  const closePopup = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfpassword("");
    setShowPassword(false);
    setPasswordError("");
    setSignupSuccess(false);
  };

  const handleSignup = async () => {
    try {
      console.log("aefds");
      if (password !== confpassword) {
        setPasswordError("Passwords do not match!");
        return;
      }
      const response = await axios.put("http://localhost:5001/profile/create", {
        first_name: firstname,
        last_name: lastname,
        user: username,
        email,
        pass: password,
      });

      console.log("Signup successful!", response.data);
      setSignupSuccess(true);
    } catch (error) {
      console.error("Signup failed:", error.message);

      //For test purposes
      //setSignupSuccess(true);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <img src={LineOfTrees} alt="Line of Trees" className="line-of-trees" />
      <form className="signup-form">
        <label>
          First name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
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
        <label>
          Confirm Password:
          <input
            type={showconfpassword ? "text" : "password"}
            value={confpassword}
            onChange={(e) => setConfpassword(e.target.value)}
            className="signup-input"
          />
          <button
            type="button"
            onClick={toggleconfPasswordVisibility}
            className="toggle-password-button"
          >
            {showconfpassword ? "Hide" : "Show"} Password
          </button>
        </label>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <br />
        <button type="submit" onClick={handleSignup} className="signup-button">
          Sign Up
        </button>
      </form>
      {signupSuccess && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>You successfully signed up!</p>
            <Link to="/login" onClick={closePopup}>
              Go to Login
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Signup;
