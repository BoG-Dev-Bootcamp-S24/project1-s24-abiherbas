import React from 'react';

const NavBar = ({ color, onLineChange, stations, onStationClick}) => {

  const handleLineClick = (newColor) => {
    onLineChange(newColor);
  };

  return (
    <div className='navbar'>
      <div className='navbar-lines-cont'>
        <button className='navbar-lines' onClick={() => handleLineClick('gold')} style={{ background: color === 'gold' ? '#cdae00' : '#f5f2f2' , color: color === 'gold' ? 'white' : 'black'}}>Gold Line</button>
        <button className='navbar-lines' onClick={() => handleLineClick('red')} style={{ background: color === 'red' ? 'red' : '#f5f2f2' , color: color === 'red' ? 'white' : 'black'}}>Red Line</button>
        <button className='navbar-lines' onClick={() => handleLineClick('green')} style={{ background: color === 'green' ? 'green' : '#f5f2f2' , color: color === 'green' ? 'white' : 'black'}}>Green Line</button>
        <button className='navbar-lines' onClick={() => handleLineClick('blue')} style={{ background: color === 'blue' ? 'blue' : '#f5f2f2' , color: color === 'blue' ? 'white' : 'black'}}>Blue Line</button>
      </div>

      <div className='navbar-header-cont'>
        <h1 className='navbar-header'>{color.toUpperCase()}</h1>
      </div>

      <div className="station-list">
        <button className='station-btn' onClick={() => onStationClick('All Stations')}>All Stations</button>
        {stations.map((station, index) => (
          <div className='station-btn-cont' key={index}>
            <button className='station-btn' onClick={() => onStationClick(station)}>{station}</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default NavBar;
