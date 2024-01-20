import "../scss/_nav.scss";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="./challenges">Challenges</a>
        </li>
        <li>
          <a href="./myevie">MyEvie</a>
        </li>
        <li>
          <a href="./calendar">Calendar</a>
        </li>
        <li>
          <a href="./help">Help</a>
        </li>
        <li>
          <a href="./scan">Scan</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
