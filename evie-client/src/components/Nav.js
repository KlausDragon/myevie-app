import "../scss/_nav.scss";
import ChallengesIcon from "../media/nav/challenges-icon.svg";
import MyEvieIcon from "../media/nav/tree-icon.svg";
import CalendarIcon from "../media/nav/calendar-icon.svg";
import HelpIcon from "../media/nav/help-icon.svg";
import SocialIcon from "../media/nav/social-icon.svg";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <a onClick={() => navigate("/challenges")}>
            <div>
              <img
                src={ChallengesIcon}
                alt="Challenges"
                className="challenge-icon"
              />
            </div>
            <span>Challenges</span>
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/myevie")}>
            <img src={MyEvieIcon} alt="My Evie" />
            <span>My Evie</span>
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/calendar")}>
            <img src={CalendarIcon} alt="Calendar" />
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/help")}>
            <img src={HelpIcon} alt="Help" />
            <span>Help</span>
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/social")}>
            <img src={SocialIcon} alt="Social" />
            <span>Social</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
