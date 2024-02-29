import React from 'react';

const NavBar = ({ color, onLineChange, data }) => {
  const handleLineClick = (newColor) => {
    onLineChange(newColor);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleLineClick('gold')} style={{ background: color === 'gold' ? '#cdae00' : 'gray' }}>Gold Line</button>
        <button onClick={() => handleLineClick('red')} style={{ background: color === 'red' ? 'red' : 'gray' }}>Red Line</button>
        <button onClick={() => handleLineClick('green')} style={{ background: color === 'green' ? 'green' : 'gray' }}>Green Line</button>
        <button onClick={() => handleLineClick('blue')} style={{ background: color === 'blue' ? 'blue' : 'gray' }}>Blue Line</button>
        {/* <button className={color === 'gold' ? 'active' : ''} onClick={() => handleLineClick('gold')}>Gold Line</button> */}
      </nav>
      <h1>{color.toUpperCase()}</h1>
    </div>
    
    
  );
};

export default NavBar;
