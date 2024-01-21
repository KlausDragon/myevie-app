import React, { useState, useEffect } from 'react';
import Nav from "../components/Nav";
import "../scss/_myevie.scss";
import evieChild from "../media/evie-1.svg";
import chatBubble from "../media/chat-bubble.svg";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

function MyEvie() {
  const [level, setLevel] = useState(50);
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const totalXPinLevel = Math.floor(110 * (level ** 1.7));
    console.log('XP:', xp);
  }, [level]);

console.log(Math.ceil(xp/(Math.floor(110 * (level ** 1.7)))));
  return (
    <div className="profile-wrapper">
      <h1>Evie</h1>
      <p className="lvl">LVL: {level}</p>
      <div className="chat-bubble">
        <img src={chatBubble} alt="chat bubble with text"/>
      </div>
      <div className="circular-progress-container">
        <CircularProgress
          value={Math.ceil(xp/(Math.floor(110 * (level ** 1.7)))*100)}
          color="green.400"
          className="circular-progress"
          size={{ base: '15rem', sm: '20rem', md: '30rem', lg: '40rem', xl: '50rem' }}
          thickness='0.5rem'
          margin='0 auto'
        >
          <CircularProgressLabel><img src={evieChild} alt="evie-child" className="profile-picture"/></CircularProgressLabel>
        </CircularProgress>
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
