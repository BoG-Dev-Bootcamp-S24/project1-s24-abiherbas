import React from 'react';

const Train = ({ DESTINATION, DIRECTION, LINE, NEXT_ARR, STATION, WAITING_TIME, DELAY}) => {
  const isDelayed = DELAY !== "T0S";

  return (
    <div className={`train ${isDelayed ? 'delayed' : 'on-time'}`}>
      <div className="train-route">
        <span className="train-station">{STATION}</span>
        <span className="train-arrow"> --{'>'}</span>
        <span className="train-station">{DESTINATION}</span>
        
        <span className={`train-line ${LINE}`}>{LINE}</span>
      </div>
      <div className="train-status">{isDelayed ? 'Delayed' : 'On Time'}</div>
      <div className="train-waiting-time">{WAITING_TIME}</div>
    </div>
  );
};
export default Train;