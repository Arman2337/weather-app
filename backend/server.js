const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Weather = require('./models/Weather');
const cors = require('cors'); // Import CORS package

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Use the API key and Mongo URI from .env
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Weather API endpoint
app.get('/api/weather', async (req, res) => {
    const { city } = req.query;
  
    if (!city) {
      return res.status(400).json({ message: 'City is required' });
    }
  
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
      const weatherData = new Weather({
        city: city,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        feels_like: response.data.main.feels_like,
      });

      await weatherData.save();
      console.log('Weather data saved to MongoDB');

      res.json(response.data);

    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      // Log more details to help troubleshoot
      console.error(error.response ? error.response.data : error.stack);
      res.status(500).json({ message: 'Failed to fetch weather data', error: error.message });
    }
  });
// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
