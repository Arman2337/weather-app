// src/App.js
// import tailwindcss from '@tailwindcss/vite';
import React from 'react';
// import './index.css'
// import './App.css';  // Import the CSS file for styling
import WeatherApp from './components/WeatherApp';  // Import the WeatherApp component

function App() {
  return (
    <div className="App bg-White-200  flex items-center justify-center">
      <WeatherApp />  {/* Render the WeatherApp component */}
    </div>
  );
}

export default App;
