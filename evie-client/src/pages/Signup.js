function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
        <label htmlFor="email">email</label>
        <input type="text" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
