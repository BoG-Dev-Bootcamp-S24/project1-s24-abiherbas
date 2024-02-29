import React from 'react';

const NavBar = ({ color, onLineChange, stations, onStationClick}) => {

  const handleLineClick = (newColor) => {
    onLineChange(newColor);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleLineClick('gold')} style={{ background: color === 'gold' ? '#cdae00' : 'gray' }}>Gold Line</button>
        <button onClick={() => handleLineClick('red')} style={{ background: color === 'red' ? 'red' : 'gray' }}>Red Line</button>
        <button onClick={() => handleLineClick('green')} style={{ background: color === 'green' ? 'green' : 'gray' }}>Green Line</button>
        <button onClick={() => handleLineClick('blue')} style={{ background: color === 'blue' ? 'blue' : 'gray' }}>Blue Line</button>
      </div>

      <h1>{color.toUpperCase()}</h1>

      <div className="station-list">
        <button onClick={() => onStationClick('All Stations')}>All Stations</button>
        {stations.map((station, index) => (
          <div key={index}>
            <button onClick={() => onStationClick(station)}>{station}</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default NavBar;
