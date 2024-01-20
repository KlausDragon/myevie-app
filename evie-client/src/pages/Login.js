function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle user login with Google
  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.ibb.co/9w2t7V9/evie-logo.png"
          alt="Evie Logo"
          className="login__logo"
        />
        <div className="login__text">
          <h1>Sign in to Evie</h1>
        </div>
        <Button
          className="login__google"
          onClick={handleGoogleLogin}
          startIcon={<img src={GoogleLogo} alt="Google Logo" />}
        >
          Sign in with Google
        </Button>
        <div className="login__divider">
          <span>OR</span>
        </div>
        <form className="login__form" onSubmit={handleLogin}>
          <div className="login__formInput">
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login__formInput">
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login__formButton">
            <Button type="submit">Sign In</Button>
          </div>
        </form>
        <div className="login__error">
          <p>{error}</p>
        </div>
        <div className="login__register">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
