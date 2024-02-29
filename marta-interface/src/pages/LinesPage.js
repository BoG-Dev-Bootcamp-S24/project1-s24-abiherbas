import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar.js';
import TrainList from '../pages/TrainList.js';
import { useParams } from 'react-router-dom';

export default function LinesPage() {
  const { color } = useParams(); //passed from home

  const [currColor, setCurrColor] = useState(color);
  const [data, setData] = useState([]); //all data
  const [stations, setStations] = useState([]);
  const [prepData, setPrepData] = useState([]); //have outgoing station specific data, what we'll show and send out to trainlist

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://midsem-bootcamp-api.onrender.com/arrivals/${currColor}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setData([]);
      }
    }

    fetchData();
  }, [currColor]);

  useEffect(() => {
    async function fetchStations() {
      try {
        const response = await fetch(`https://midsem-bootcamp-api.onrender.com/stations/${currColor}`);
        const jsonData = await response.json();
        setStations(jsonData);
      } catch (error) {
        setStations([]);
      }
    }

    fetchStations();
  }, [currColor]);

  useEffect(() => {
    setPrepData(data);
  }, [data]);

  const handleStationClick = (station) => {
    if (station === 'All Stations') {
      setPrepData(data); // Show all data
    } else {
      const filtered = data.filter(train => train.STATION === (station.toUpperCase() + ' STATION'));
      setPrepData(filtered); // Show data for specific station
    }
  };


  const handleLineChange = (color) => {
    setCurrColor(color);
  };

  return (
    <div>
      <NavBar color={currColor} onLineChange={handleLineChange} stations={stations} onStationClick={handleStationClick}/>
      <TrainList color={currColor} data={prepData} />
    </div>
  );
};
