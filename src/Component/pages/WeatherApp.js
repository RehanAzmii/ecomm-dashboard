import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";

import ShowTemp from "./ShowTemp";

const WeatherApp = () => {
  const [city, setCity] = useState();
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
  });

  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=465521e09cc08a4d9380cc720dcca590`
      )
      .then((res) => {
        setData({
          description: res.data.weather[0].description,

          temp: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          humidity: res.data.main.humidity,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
          country: res.data.sys.country,
        });
      });
  };
  return (
    <>
      <Header />
      <div className="container text-center my-3">
        <h1>Weather App</h1>
        <br />

        <input
          type="text"
          className="from-control"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <button className="btn btn-primary" type="submit" onClick={handleClick}>
          Get Temp
        </button>
      </div>
      <ShowTemp text={data} />
    </>
  );
};

export default WeatherApp;
