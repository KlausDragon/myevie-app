import Nav from "../components/Nav";
import "../scss/_myevie.scss";
import evieChild from "../media/evie-1.svg";

function MyEvie() {
  return (
    <div className="profile-wrapper">
      <h1>Evie</h1>
      <p className="lvl">LVL: 23</p>
      <div className="profile-picture">
        <img src={evieChild} alt="evie-child" />
      </div>
      <h2 className="owner-heading">Owner:</h2>
      <p className="owner-name">John Smith</p>
      <h2 className="total-challenges">Total Challenges Completed:</h2>
      <p>1</p>
      <div className="history">
        <h3>History: </h3>
        <div className="history-item">
          <div className="history-title">2 bottles were recycled on:</div>
          <div className="history-date">January 1, 2024</div>
        </div>
        <div className="history-item">
          <div className="history-title">3 bottles were recycled on:</div>
          <div className="history-date">December 30, 2023</div>
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
