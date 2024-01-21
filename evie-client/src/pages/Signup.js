import { useState } from "react";
import Header from "../components/Header";
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../scss/_signup.scss';

function Signup() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confpassword, setConfpassword] = useState('');
  const [showconfpassword, setshowconfpassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleconfPasswordVisibility = () => {
    setshowconfpassword(!showconfpassword);
  };

  const closePopup = () => {
    // Reset states and close the pop-up
    setUsername('');
    setEmail('');
    setPassword('');
    setConfpassword('');
    setShowPassword(false);
    setPasswordError('');
    setSignupSuccess(false);
  };

  const handleSignup = async () => {
    try {
      
      //check if passwords match
      if (password !== confpassword) {
        setPasswordError('Passwords do not match!');
        return;
      }
      
      const response = await axios.post('/api/signup', {firstname, lastname, username, email, password });
    
      console.log('Signup successful!', response.data);
      //setSignupSuccess(true);
    } catch (error) {
      console.error('Signup failed:', error.message);

      //For test purposes
      setSignupSuccess(true);

    }
  };
  

  return (
    <div className="signup-container">
      <Header />
      <h1>Sign Up</h1>
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
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <button type="button" onClick={togglePasswordVisibility} className="toggle-password-button">
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type={showconfpassword ? 'text' : 'password'}
            value={confpassword}
            onChange={(e) => setConfpassword(e.target.value)}
            className="signup-input"
          />
          <button type="button" onClick={toggleconfPasswordVisibility} className="toggle-password-button">
            {showconfpassword ? 'Hide' : 'Show'} Password
          </button>
        </label>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <br />
        <button type="button" onClick={handleSignup} className="signup-button">
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


    </div>
  );
}

export default Signup;
