import React, { useState } from 'react';

import { fetchWeather } from './api/fetch';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery('');
    }
  }

  return (
    <div className="container">
      <input
        className="searchBar"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} />
      
      {weather.main && (
        <div className="cityCard">
          <h2>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
