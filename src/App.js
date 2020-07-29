import React, { useState } from 'react';

import { fetchWeather } from './api/fetch';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);

      console.log(data);
      setQuery('');
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
