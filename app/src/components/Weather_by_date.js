import React, { useState } from 'react'
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiDust, WiSmoke } from 'react-icons/wi';



export default function Weather_by_date(props) {
    let {weatherData, setWeatherData} = props

    // console.log(country)
    const [Date , setDate] = useState('')
    
    const handleonchange = (Date) =>{
        setDate(Date);
    }
    const date_click = () => {
        // Fetch weather data from the Flask backend
        axios.get(`/weather_by_date?datetime=${Date}`)
          .then(response => {
            if(response.data && response.data.length > 0){

                setWeatherData(response.data);
            }
            else{
                alert('No data found!')
            }
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
          });
      }

      const getWeatherIcon = (weatherData) => {
        const weatherCondition = weatherData[0].weather[0].main;  
        switch (weatherCondition) {
          case 'Clear':
            return <WiDaySunny />;
          case 'Smoke':
            return <WiSmoke />;
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
    <div className="container1">
    <input type="date" onChange={e => handleonchange(e.target.value)} style={{
                        color: props.mode === 'dark' ? 'white' : 'black',
                        backgroundColor: props.mode === 'dark' ? '#212529' : 'white', borderRadius: '5px', marginTop:'5px', marginLeft:'5px'
                    }}/>
    <div className='my-3'>                
    <button type="button" style={{marginTop:'5px', marginLeft:'5px'}} className="btn btn-sm btn-outline-primary" onClick={date_click}>Show Data</button>
    </div>
    </div>
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
          <p>Select Location and Date for weather data...</p>
        )}
      </div>

    </div>
    </>
  )
}
