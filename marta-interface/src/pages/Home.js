import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='home-banner'>
            <div className='home-header-cont'>
                <h1 className='home-header'>MARTA</h1>
            </div>
            <div className='about-cont'>
                <Link to="/about" className='about-link'>About MARTA</Link>
            </div>
            
        </div>

        <div className='home-body'>
            <div>
                <h2>VIEW ROUTES SCHEDULE</h2>
                <div>
                    <button><Link to="/lines/gold">Gold Line</Link></button>
                    <button><Link to="/lines/red">Red Line</Link></button>
                    <button><Link to="/lines/green">Green Line</Link></button>
                    <button><Link to="/lines/blue">Blue Line</Link></button>
                </div>
            </div>
            <div>
                <img src="https://www.progressiverailroading.com/resources/editorial/2019/PR1119-MARTA-40.jpg"></img>
            </div>
        </div>
    </div>
  );
};

export default Home;