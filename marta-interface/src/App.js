
import React, { useEffect } from 'react';
import './App.css';
import LinesPage from './pages/LinesPage';
import TrainList from './pages/TrainList';

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
      <LinesPage />
    </div>
  );
}

export default App;
