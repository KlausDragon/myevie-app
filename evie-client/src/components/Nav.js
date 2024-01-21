import "../scss/_nav.scss";
import ChallengesIcon from "../media/nav/challenges-icon.svg";
import MyEvieIcon from "../media/nav/tree-icon.svg";
import CalendarIcon from "../media/nav/calendar-icon.svg";
import ScanIcon from "../media/nav/qr-code-icon.svg";
import HelpIcon from "../media/nav/help-icon.svg";
import SocialIcon from "../media/nav/social-icon.svg";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="./challenges">
            <div>
              <img src={ChallengesIcon} alt="Challenges" className="challenge-icon"/>
            </div>
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
          <a href="./social">
            <img src={SocialIcon} alt="Social" />
            <span>Social</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
