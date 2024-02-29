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
            <div className='home-img-cont'>
                <img className='home-img' src="https://www.progressiverailroading.com/resources/editorial/2019/PR1119-MARTA-40.jpg"></img>
            </div>
            <div className='home-sched-cont'>
                <h2 className='home-routes-header'>VIEW ROUTES SCHEDULE</h2>
                <div className='home-routes'>
                    <Link to="/lines/gold" className='home-route-link'>Gold Line</Link>
                    <Link to="/lines/red" className='home-route-link'>Red Line</Link>
                    <Link to="/lines/green" className='home-route-link'>Green Line</Link>
                    <Link to="/lines/blue" className='home-route-link'>Blue Line</Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;