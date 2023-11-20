import React from "react";

const CountDown = ({ hours, minutes, seconds }) => {
  return (
    <div className="countdown">
      <div className="countdown-content">
        <p className="display-number">360</p>

        <p className="display-text">Days</p>
      </div>

      <div className="countdown-content">
        <p className="display-number">{hours}</p>
        <p className="display-text" style={{ color: "orange" }}>
          Hours
        </p>
      </div>

      <div className="countdown-content">
        <p className="display-number">{minutes}</p>
        <p className="display-text" style={{ color: "pink" }}>
          Min
        </p>
      </div>

      <div className="countdown-content">
        <p className="display-number">{seconds}</p>
        <p className="display-text" style={{ color: "red" }}>
          Sec
        </p>
      </div>
    </div>
  );
};

export default CountDown;
