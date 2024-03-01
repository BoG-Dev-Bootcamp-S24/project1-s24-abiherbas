/* This component should have a prop specifying the line color 
(i.e. blue, gold, red, or green), and would contain the interface 
for all trains in the given line. 
The current line that's being displayed should be stored as a state 
in the LinesPage component. 
Within the TrainList.js component, the data should be filtered to 
only return info for trains that are part of the specific line. 
For example, for the gold line we only want an array of gold trains. 
*/
import React, {useState} from 'react';
import Train from '../components/Train.js';

const TrainList = ({ color, data }) => {

  const [northbound, setNorthbound] = useState(false);
  const [southbound, setSouthbound] = useState(false);
  const [eastbound, setEastbound] = useState(false);
  const [westbound, setWestbound] = useState(false);

  //const [activeDir1, setactiveDir1] = useState(false); //north, east
  //const [activeDir2, setactiveDir2] = useState(false); //south, west

  const [arr, setArr] = useState(false);
  const [sched, setSched] = useState(false);

  const handleNorthboundClick = () => {
    setNorthbound(!northbound);
    //setactiveDir1(!activeDir1);
  };

  const handleSouthboundClick = () => {
    setSouthbound(!southbound);
    //setactiveDir2(!activeDir2);
  };

  const handleEastboundClick = () => {
    setEastbound(!eastbound);
    //setactiveDir1(!activeDir1);
  };

  const handleWestboundClick = () => {
    setWestbound(!westbound);
    //setactiveDir2(!activeDir2);
  };

  const handleArrivingClick = () => {
    setArr(!arr);
  };

  const handleScheduledClick = () => {
    setSched(!sched);
  };

  if (!data) return <p>Data is loading or not available.</p>;

  const prefilteredData = data.filter(train => train.LINE === color.toUpperCase()); //filter by line

  const arrfilteredData = prefilteredData.filter(train => { //filter by arriving 
    if (arr && train.WAITING_TIME !== 'Arriving') {
      return false;
    }
    return true;
  });

  const dir1filteredData = arrfilteredData.filter(train => { //filter by direction 1
    if ((northbound && train.DIRECTION !== 'N') || (eastbound && train.DIRECTION !== 'E')) {
      return false;
    }
    return true;
  });

  const dir2filteredData = dir1filteredData.filter(train => { //filter by direction 2
    if ((southbound && train.DIRECTION !== 'S') || (westbound && train.DIRECTION !== 'W')) {
      return false;
    }
    return true;
  });

  const filteredData = dir2filteredData.filter(train => { //filter by scheduled 
    if (sched && train.WAITING_TIME === 'Arriving') {
      return false;
    }
    return true;
  });


  return (
    <div className="train-list">
    
      {(color === 'gold' || color === 'red') ? 
      (
        <div className='filter-cont'>
        <button className='filter' onClick={handleArrivingClick} style={{ background: arr ? 'black' : 'white' , color: arr ? 'white' : 'black'}}>Arriving</button>
        <button className='filter' onClick={handleScheduledClick} style={{ background: sched ? 'black' : 'white' , color: sched ? 'white' : 'black'}}>Scheduled</button>
        <button className='filter' onClick={handleNorthboundClick} style={{ background: northbound ? 'black' : 'white' , color: northbound ? 'white' : 'black'}}>Northbound</button>
        <button className='filter' onClick={handleSouthboundClick} style={{ background: southbound ? 'black' : 'white' , color: southbound ? 'white' : 'black'}}>Southbound</button>
        </div>
      ) 
      : (
        <div className='filter-cont'>
        <button className='filter' onClick={handleArrivingClick} style={{ background: arr ? 'black' : 'white' , color: arr ? 'white' : 'black'}}>Arriving</button>
        <button className='filter' onClick={handleScheduledClick} style={{ background: sched ? 'black' : 'white' , color: sched ? 'white' : 'black'}}>Scheduled</button>
        <button className='filter' onClick={handleEastboundClick} style={{ background: eastbound ? 'black' : 'white' , color: eastbound ? 'white' : 'black'}}>Eastbound</button>
        <button className='filter' onClick={handleWestboundClick} style={{ background: westbound ? 'black' : 'white' , color: westbound ? 'white' : 'black'}}>Westbound</button>
        </div>
      )}
    
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((trainData, index) => (
          <Train
            key={index}
            DESTINATION={trainData.DESTINATION}
            DIRECTION={trainData.DIRECTION}
            LINE={trainData.LINE}
            NEXT_ARR={trainData.NEXT_ARR}
            STATION={trainData.STATION}
            WAITING_TIME={trainData.WAITING_TIME}
            DELAY={trainData.DELAY}
          />
        ))
      ) : (
        <p>No {color} trains available</p>
      )}
    </div>
    </div>
  );
};

export default TrainList;
