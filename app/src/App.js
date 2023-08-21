import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Search from './components/Search';
import axios from 'axios';
import Weather_by_date from './components/Weather_by_date';


function App() {

  const [Mode, setMode] = useState('light');

  const changeMode = () => {

    if (Mode === 'dark') {

      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
    else {

      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    }
  }

  const [value, setvalue] = useState('');
  const [weatherData, setWeatherData] = useState(null);


  function handleSearchSubmit() {
    if (value.trim() === '') {

      alert('plz insert some text');
      return;
    }
    else {
      axios.get(`/weather_data?search=${value}`).then((resp) => {
        if (resp.data && resp.data.length > 0){

          setWeatherData(resp.data)
        }
        else{
          alert('No data found!')
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Weather Forecast" changemode={changeMode} mode={Mode} />
        <Search mode={Mode} setvalue={setvalue} value={value} handleSearchSubmit={handleSearchSubmit} />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home mode={Mode} weatherData={weatherData} setWeatherData={setWeatherData} />}/>
            <Route path='/textbox' element={<Textbox mode={Mode} />}/>
            <Route path='/about' element={<About mode={Mode} />}/>
            <Route path = '/bydate' element={<Weather_by_date mode={Mode} weatherData={weatherData} setWeatherData={setWeatherData} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
