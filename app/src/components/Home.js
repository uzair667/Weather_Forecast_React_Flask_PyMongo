import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiDust } from 'react-icons/wi';
  
export default function WeatherWidget(props) {
        let {weatherData, setWeatherData} = props
        
        if(!weatherData){
            useEffect(() => {
              // Fetch weather data from the Flask backend
              axios.get("/weather_data")
                .then(response => {
                  setWeatherData(response.data);
                })
                .catch(error => {
                  console.error('Error fetching weather data:', error);
                });
            }, []);
        }

        const getWeatherIcon = (weatherData) => {
              const weatherCondition = weatherData[0].weather[0].main;  
              switch (weatherCondition) {
                case 'Clear':
                  return <WiDaySunny />;
                case 'Haze':
                  return <WiCloudy />;
                case 'Clouds':
                  return <WiCloudy />;
                case 'Rain':
                  return <WiRain />;
                case 'Snow':
                  return <WiSnow />;
                case 'Dust':
                  return <WiDust />;
                default:
                  return null;
              }
        }

    return (
        <>
    <div className="container">
        <div className="weather-widget" style={{color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#212529':'white'}}>
        {weatherData ? (
          <div>
              <div className="weather-icon">{getWeatherIcon(weatherData)}</div>
              <div className="weather-description">
                <h3>{weatherData[0].name}</h3>
                <h2>Description: {weatherData[0].weather[0].description}</h2>
                <p>Temperature: {weatherData[0].main['temp']} °C</p>
                <p>Minumum Temp:{weatherData[0].main['temp_min']}°C</p>
                <p>Maximum Temp: {weatherData[0].main['temp_max']}°C</p>
                <p>Feels Like: {weatherData[0].main['feels_like']}°C</p>
                <p>Humidity: {weatherData[0].main['humidity']}%</p>
                <p>Wind:{weatherData[0].wind['speed']} km/h</p>
                <p>Country: {weatherData[0].sys['country']}</p>
                <p>Date : {weatherData[0].datetime}</p>
              </div>
            </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      </div>
      </>
    )
  }
  
  