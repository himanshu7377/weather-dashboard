// components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const { user } = useAuth();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data based on the user's city using OpenWeatherMap API
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
   

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${user.city}&appid=${apiKey}`;
   


    axios.get(apiUrl)
      .then(response => {
        setWeatherData(response.data)
        console.log(response.data)

      })
      .catch(error => {
        // Handle API error gracefully
        console.error('Error fetching weather data:', error);
      });
     
  }, [user]);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>User Details</h3>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>City: {user.city}</p>
      </div>
      <div>
        <h3>Weather Information</h3>
        {weatherData && (
          <>
            <p>Temperature: {weatherData.main.temp} K</p>
            {/* Add more weather information as needed */}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
