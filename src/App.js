import React, { useState } from 'react';

import { fetchWeather } from './api/fetch';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
