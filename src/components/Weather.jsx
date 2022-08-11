import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";

function Weather() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const API_KEY = "2fce26b3009e0a66de8c0a0223800869";

  // function get temp data
  const getTempData = (api, query) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.main);
        setCity(query);
        // console.log(res.main);
      })
      .catch((err) => {
        console.log("error in get data", err);
        setData(null);
      });
  };

  // call use Effect for render data every search input
  useEffect(() => {
    getTempData(API_KEY, inputValue);
  }, [inputValue]);

  return (
    <div>
      <input className="weather-input-city"
        type="text"
        placeholder="Enter City Name"
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
      />
      
      {!inputValue.length ? null : data ? (
        <div>
          <p className="weather-p-city">Weather Details of City : {city}</p>
          
          <div className="weather-information-container">
          <p >Current Temperature : {data.temp} °C</p>
          <p >Temperature Range : {data.temp_min} °C  to  {data.temp_max} °C</p>
          <p >Humidity  : {data.humidity}</p>
          <p >Sea Level  : {data.sea_level}</p>
          <p >Ground Level  : {data.grnd_level}</p>
          
          </div>
        </div>
      ) : (
        <p className="weather-valid-city-name">Enter Valid City Name</p>
      )}
    </div>
  );
}

export default Weather;
