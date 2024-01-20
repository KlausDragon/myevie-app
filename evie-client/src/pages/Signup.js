import { useState } from "react";
import Header from "../components/Header";
import '../scss/_signup.scss';

function Signup() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfpassword] = useState('');
  const handleSignup = () => {
    // Add your Sign up logic here
    console.log(`Signed up as: ${firstname}, ${lastname}, with username: ${username} and password: ${password}`);
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
            value={password}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Password: 
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
        </label>
        <br /> 
        <label>
          Confirm Password: 
          <input
            type="text"
            value={confpassword}
            onChange={(e) => setConfpassword(e.target.value)}
            className="signup-input"
          />
        </label>
        <br /> 
        <button type="button" onClick={handleSignup} className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
