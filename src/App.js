import React, {useState}  from 'react';
import axios from 'axios';  
import logo from './logo.svg';
import './App.css';

function App() {
  const url ='https://api.openweathermap.org/data/2.5/weather?lat=7.778825&lon=4.546455&appid=4d4323d78908e08ac921e0c09e0d2060'

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Osogbo</p>
          </div>
          <div className="temp">
            <h1>65°F</h1>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>65°F</p>
            <p >Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p> 
          </div>
          <div className="wind">
            <p className='bold'>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
