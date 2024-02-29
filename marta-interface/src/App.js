
import React, { useEffect } from 'react';
import './App.css';
import LinesPage from './pages/LinesPage';
import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const url = 'https://midsem-bootcamp-api.onrender.com/stations/red';

  // Function to ping the server
  const pingServer = async () => {
    console.log(`Pinging server at ${new Date().toISOString()}`);
    try {
      const response = await fetch(url);
      console.log(`Server pinged successfully at ${new Date().toISOString()}: Status Code ${response.status}`);
    } catch (error) {
      console.error(`Error pinging server: ${error}`);
    }
  };

  // Ping the server on component mount and every 45 seconds thereafter
  useEffect(() => {
    pingServer(); // Ping server on component mount
    const pingInterval = setInterval(pingServer, 45000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(pingInterval);
  }, []);

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lines/:color" element={<LinesPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
    /*<div className="App">
      <LinesPage />
    </div>*/
  );
}

export default App;
