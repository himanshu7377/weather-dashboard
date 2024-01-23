// components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { useTheme } from '../context/ThemeContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  console.log(theme)

  const handleLogin = () => {
    // Validate credentials and perform login logic
    // For simplicity, using a hardcoded user array for validation
    const users = [
      {
        "name": "John Doe",
        "username": "1",
        "password": "1",
        "city": "New York"
      },
      {
        "name": "Jane Smith",
        "username": "jane_smith",
        "password": "pass456",
        "city": "Los Angeles"
      },
      {
        "name": "Alice Johnson",
        "username": "alice_j",
        "password": "secure789",
        "city": "Chicago"
      },
      {
        "name": "Bob Thompson",
        "username": "bob_t",
        "password": "bobpass",
        "city": "San Francisco"
      }
    ];

    // Basic validation for empty fields
    if (!username && !password){
      setError('Please enter  username and password.');
      return;
    }
    else if (!username  ) {
      setError('Please enter  username.');
      return;
    }else if (!password){
      setError('Please enter   password.');
      return;
    }



    const user = users.find((u) => u.username === username && u.password === password);
    // console.log(user)

    if (user) {
      login(user);
      navigate('/dashboard');
    } else {
      // Handle failed login
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
  <div className={`min-h-screen  bg-${theme === 'dark' ? 'gray-800' : 'yellow-300'}`}>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md p-4 md:p-6 w-full bg-white  shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form >
          <label className="block mb-4">
            <span className="text-gray-700">Username:</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded mt-1"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded mt-1"
            />
          </label>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
