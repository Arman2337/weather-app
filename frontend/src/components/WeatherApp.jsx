// import React, { useState } from 'react';

// const WeatherApp = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const fetchWeather = async () => {
//     if (!city) {
//       setError('Please enter a city name.');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
//       const data = await response.json();

//       if (response.ok) {
//         setWeather(data);  // Set the weather data from the backend
//         setError('');
//       } else {
//         setError(data.message);  // Handle errors
//         setWeather(null);
//       }
//     } catch (err) {
//       setError('An error occurred while fetching the weather data.');
//       console.error(err);
//       setWeather(null);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
//       <h1 className="text-4xl font-bold mb-6 text-blue-600">Weather Application</h1>
      
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city"
//           className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
        
//         <button
//           onClick={fetchWeather}
//           className="w-full py-3 mb-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
//         >
//           Get Weather
//         </button>

//         {error && (
//           <div className="text-red-600 text-center mb-4">{error}</div>
//         )}

//         {weather && (
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold text-gray-700">{weather.name}</h2>
//             <p className="text-xl text-gray-600">Temperature: {weather.main.temp} °C</p>
//             <p className="text-lg text-gray-500">Humidity: {weather.main.humidity} %</p>
//             <p className="text-lg text-gray-500">Condition: {weather.weather[0].description}</p>
//             <div className="mt-4">
//               <img
//                 src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
//                 alt="Weather icon"
//                 className="w-16 h-16 mx-auto"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;



// src/WeatherApp.jsx
// import React, { useState } from 'react';

// const WeatherApp = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const fetchWeather = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
//       const data = await response.json();

//       if (response.ok) {
//         setWeather(data);
//         setError('');
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('An error occurred while fetching the weather data.');
//       console.error(err);
//     }
//   };

//   // Function to get weather icon based on condition
//   const getWeatherIcon = (condition) => {
//     switch (condition?.toLowerCase()) {
//       case 'clear': return '☀️';
//       case 'clouds': return '☁️';
//       case 'rain': return '🌧️';
//       case 'snow': return '❄️';
//       case 'thunderstorm': return '⛈️';
//       default: return '🌤️';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
//       <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 transform transition-all hover:scale-105">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           Weather Forecast
//         </h1>

//         {/* Input and Button */}
//         <div className="flex flex-col sm:flex-row gap-2 mb-6">
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="Enter city name"
//             className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white/70 text-gray-700 placeholder-gray-400"
//           />
//           <button
//             onClick={fetchWeather}
//             className="px-4 py-3 mt-2 sm:mt-0 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium"
//           >
//             Search
//           </button>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center animate-fade-in">
//             {error}
//           </div>
//         )}

//         {/* Weather Display */}
//         {weather && (
//           <div className="text-center animate-fade-in">
//             <div className="flex justify-center items-center mb-4">
//               <span className="text-6xl sm:text-7xl mr-2">
//                 {getWeatherIcon(weather.weather[0].main)}
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
//                 {weather.name}
//               </h2>
//             </div>
            
//             <div className="space-y-3">
//               <p className="text-4xl sm:text-5xl font-bold text-gray-900">
//                 {Math.round(weather.main.temp)}°C
//               </p>
//               <p className="text-lg sm:text-xl text-gray-600 capitalize">
//                 {weather.weather[0].description}
//               </p>
//               <div className="flex justify-center gap-6 text-gray-700">
//                 <p className="text-base sm:text-lg">
//                   Humidity: <span className="font-semibold">{weather.main.humidity}%</span>
//                 </p>
//                 <p className="text-base sm:text-lg">
//                   Feels Like: <span className="font-semibold">{Math.round(weather.main.feels_like)}°C</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Custom CSS for animation */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fadeIn 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WeatherApp;
// src/WeatherApp.jsx

import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError('');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred while fetching the weather data.');
      console.error(err);
    }
  };

  // Function to get weather icon based on condition
  const getWeatherIcon = (condition) => {
    switch (condition?.toLowerCase()) {
      case 'clear': return '☀️';
      case 'clouds': return '☁️';
      case 'rain': return '🌧️';
      case 'snow': return '❄️';
      case 'thunderstorm': return '⛈️';
      default: return '🌤️';
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full h-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transform transition-all hover:scale-100 sm:hover:scale-105">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Weather Forecast
        </h1>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all bg-white/70 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium text-sm sm:text-base"
          >
            Search
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 sm:mb-6 text-center text-sm sm:text-base animate-fade-in">
            {error}
          </div>
        )}

        {/* Weather Display */}
        {weather && (
          <div className="flex-1 flex flex-col justify-center text-center animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-center items-center mb-4 sm:mb-6">
              <span className="text-5xl sm:text-6xl md:text-7xl mr-0 sm:mr-4 mb-4 sm:mb-0">
                {getWeatherIcon(weather.weather[0].main)}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
                {weather.name}
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {Math.round(weather.main.temp)}°C
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 capitalize">
                {weather.weather[0].description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-gray-700">
                <p className="text-sm sm:text-base md:text-lg">
                  Humidity: <span className="font-semibold">{weather.main.humidity}%</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Feels Like: <span className="font-semibold">{Math.round(weather.main.feels_like)}°C</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WeatherApp;