import React from 'react'

export default function About(props) {
  return (
        <>
        <div className="container" >
        <div className="about-section" style={{color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#212529':'white'}}>
      <h2>About Weather Forecast</h2>
      <p>
        Welcome to Weather Forecast, your go-to app for getting up-to-date weather information
        for any location around the world. Whether you're planning a trip, going for a hike, or
        just curious about the weather, we've got you covered!
      </p>
      <p>
        Our app uses the latest weather data from reliable sources to provide you with accurate
        forecasts. You can search for a specific location, view the current weather conditions,
        and get a detailed forecast for the upcoming days.
      </p>
      <p>
        Weather Forecast also offers additional features like hourly forecasts, weather maps,
        and weather alerts to keep you informed about any changes in the weather. We strive to
        make your weather experience easy and enjoyable.
      </p>
      <p>
        Thank you for using Weather Forecast! We hope our app helps you stay prepared and makes
        your day a little bit brighter.
      </p>
      <p>Happy weather watching!</p>
    </div>
    </div>
        </>
  )
}
