// components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { WiThermometer, WiHumidity, WiStrongWind, WiSunrise, WiSunset, WiDaySunny, WiAlien, } from 'react-icons/wi';

const Dashboard = () => {
  const { user } = useAuth();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data based on the user's city using OpenWeatherMap API
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${user.city}&appid=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        // Handle API error gracefully
        console.error('Error fetching weather data:', error);
      });
  }, [user]);

  const getTemperatureCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const getFormattedTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-800 text-white p-4">
      <div className="max-w-2xl mx-auto bg-black p-8 rounded-md shadow-md mt-8">
        <div className='text-center'>
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Weather Dashboard</h2>
        </div>
        {weatherData ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-between'>
                <h3 className="text-lg font-semibold mb-2">Temperature</h3>
                <WiThermometer className="inline-block text-3xl text-black-500 " />
                </div>
                
                <p className="text-xl">{getTemperatureCelsius(weatherData.main.temp)} °C</p>
              </div>


              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-evenly'>
                  <h3 className="text-lg font-semibold mb-2">Max Temperature</h3>
                  <WiThermometer className="inline-block text-3xl text-red-500" />
                </div>
                <p className="text-xl">{getTemperatureCelsius(weatherData.main.temp_max)} °C</p>
              </div>

              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-evenly'>
                  <h3 className="text-lg font-semibold mb-2">Min Temperature</h3>
                  <WiThermometer className="inline-block text-3xl text-blue-500" />
                </div>
                <p className="text-xl">{getTemperatureCelsius(weatherData.main.temp_min)} °C</p>
              </div>

              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-between'>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <WiAlien className="inline-block text-3xl text-blue-500 " />
                </div>
                <p className="text-xl">{weatherData.weather[0].description} in {user.city}</p>
              </div>

              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-evenly'>
                  <h3 className="text-lg font-semibold mb-2">Humidity</h3>
                  <WiHumidity className="inline-block text-3xl text-black-500" />
                </div>
                <p className="text-xl">{weatherData.main.humidity}%</p>
              </div>

              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-between'>
                  <h3 className="text-lg font-semibold mb-2">Wind Speed</h3>
                  <WiStrongWind className="inline-block text-3xl text-black-500" />
                </div>
                <p className="text-xl">{weatherData.wind.speed} m/s</p>
              </div>

           

            

              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-between'>
                <h3 className="text-lg font-semibold mb-2">Sunrise</h3>
                <WiSunrise className="inline-block text-3xl text-yellow-500 " />
                </div>
                <p className="text-xl">{getFormattedTime(weatherData.sys.sunrise)}</p>
              </div>

              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-between'>
                <h3 className="text-lg font-semibold mb-2">Sunset</h3>
                <WiSunset className="inline-block text-3xl text-orange-500 " />
                </div>
                <p className="text-xl">{getFormattedTime(weatherData.sys.sunset)}</p>
              </div>

              <div className="bg-blue-800 p-6 rounded-md">
                <div className='flex justify-between'>
                <h3 className="text-lg font-semibold mb-2">Condition</h3>
                <WiDaySunny className="inline-block text-3xl text-yellow-500 " />
                </div>
                <p className="text-xl">{weatherData.weather[0].main}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
