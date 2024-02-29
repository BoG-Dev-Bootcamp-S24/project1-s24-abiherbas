import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return(
        <div>
            <div className='home-banner'>
                <div className='home-header-cont'>
                    <h1 className='home-header'>MARTA</h1>
                </div>
                <div className='about-cont'>
                    <Link to="/" className='about-link'>Home</Link>
                </div>
            </div>
            <div className='about-body'>
                <img className='about-map' src='https://preview.itsmarta.com/uploadedimages/train-stations-map-2020.jpg'></img>
                <div className='about-text'>
                    <p className='mission'>For over a quarter of a century, MARTA has moved over 3.5 billion people throughout Atlanta and the surrounding cities. We have been a staple to the community and a great economic driver for the city.  Today, we are among the largest transit agency in the United States and we are striving to be bigger and better.  While our opportunities for growth are eminent, our commitment to our customers and our communities in which we operate is even greater.</p>
                    <p className='runtimes'>
                        <br></br>
                        <b>Weekday Train Frequencies</b><br></br>
                        5-6am&nbsp;&nbsp;&nbsp;Approx. 20 mins <br></br>
                        6am-9am&nbsp;&nbsp;&nbsp;Approx. 12 mins <br></br>
                        9am-3pm&nbsp;&nbsp;&nbsp;Approx. 15 mins <br></br>
                        3pm-7pm&nbsp;&nbsp;&nbsp;Approx. 12 mins <br></br>
                        7pm and later&nbsp;&nbsp;&nbsp;Approx. 20 mins <br></br>
                        <br></br>
                        <b>Weekend Train Frequencies</b><br></br>
                        6-1am (all day)&nbsp;&nbsp;&nbsp;Approx. 20 mins
                    </p>
                </div>
                
            </div>
            
        </div>
    );
};

export default About;