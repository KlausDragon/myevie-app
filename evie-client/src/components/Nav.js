import "../scss/_nav.scss";
import ChallengesIcon from "../media/challenges.svg";
import MyEvieIcon from "../media/myevie.svg";
import CalendarIcon from "../media/calendar.svg";
import ScanIcon from "../media/scan.svg";
import HelpIcon from "../media/help.svg";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="./challenges">
            <img src={ChallengesIcon} alt="Challenges" />
            <span>Challenges</span>
          </a>
        </li>
        <li>
          <a href="./myevie">
            <img src={MyEvieIcon} alt="My Evie" />
            <span>My Evie</span>
          </a>
        </li>
        <li>
          <a href="./calendar">
            <img src={CalendarIcon} alt="Calendar" />
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a href="./help">
            <img src={HelpIcon} alt="Help" />
            <span>Help</span>
          </a>
        </li>
        <li>
          <a href="./scan">
            <img src={ScanIcon} alt="Scan" />
            <span>Scan</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
