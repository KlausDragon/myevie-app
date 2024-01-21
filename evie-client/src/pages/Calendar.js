import Nav from "../components/Nav";
import "../scss/_calendar.scss";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";

function Calendar() {
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>Eco-Challenges Calendar</h1>
        <div className="legend">
          <span className="dot car-free"></span>Car-free days
          <span className="dot recycling-plant"></span>Recycling plant days
        </div>
      </div>
      <div className="calendar-main">
        <ReactCalendar onChange={onChange} value={date} />
      </div>
      <div className="upcoming-challenges">
        <h2>Upcoming Challenges:</h2>
        <div className="challenge-item">
          <div className="challenge-title">Next car-free day:</div>
          <div className="challenge-date">January 1, 2024</div>
        </div>
        <div className="challenge-item">
          <div className="challenge-title">Next recycling plant day:</div>
          <div className="challenge-date">January 2, 2024</div>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Calendar;
