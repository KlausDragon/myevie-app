import Nav from "../components/Nav";
import "../scss/_myevie.scss";
import evieChild from "../media/evie-1.svg";
import chatBubble from "../media/chat-bubble.svg";

function MyEvie() {
  return (
    <div className="profile-wrapper">
      <h1>Evie</h1>
      <p className="lvl">LVL: 23</p>
      <div className="chat-bubble">
        <img src={chatBubble} alt="chat bubble with text"/>
      </div>
      <div className="profile-picture">
        <img src={evieChild} alt="evie-child" />
      </div>
      <div className="owner">
        <h2 className="owner-heading">Owner:</h2>
        <p className="owner-name">John Smith</p>
      </div>
      <br></br>
      <div className="total-challenge">
        <h2 className="total-challenges">Total Challenges Completed:</h2>
        <p>1</p>
      </div>
      <div className="history">
        <h3>History: </h3>
        <div className="history-item">
          <p className="history-title">2 bottles were recycled on:</p>
          <p className="history-date">January 1, 2024</p>
        </div>
        <div className="history-item">
          <p className="history-title">3 bottles were recycled on:</p>
          <p className="history-date">December 30, 2023</p>
        </div>
        <span className="view-history">
          <a>View full history</a>
        </span>
      </div>
      <Nav />
    </div>
  );
}

export default MyEvie;
