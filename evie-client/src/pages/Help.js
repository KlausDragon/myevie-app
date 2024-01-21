import "../scss/_help.scss";
import Nav from "../components/Nav";

function Help() {
  return (
    <div className="help-page">
      <h1>Help & FAQ</h1>
      <p>
        Welcome to the Help & FAQ section of Evie! Here, we aim to assist you
        with any queries and provide support for your journey with Evie. If
        you're facing challenges, have questions about how Evie works, or need
        tips on completing your weekly challenges, you're in the right place.
        Our FAQs cover a range of topics from navigating the app to
        understanding the specifics of challenge completion. If your question
        isn't answered here, don't hesitate to reach out to our support team who
        are always ready to help. Remember, every step you take in Evie not only
        contributes to your personal growth but also helps Evie evolve. So,
        let’s solve any issues together and keep making progress!
      </p>
      <Nav />
    </div>
  );
}

export default Help;
