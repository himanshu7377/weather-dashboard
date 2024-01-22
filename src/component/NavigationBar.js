// components/NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavigationBar = () => {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    // Implement logic to toggle dark mode
  };

  return (
    <nav style={{ background: darkMode ? '#333' : '#eee', color: darkMode ? '#fff' : '#333' }}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">{user ? 'Logout' : 'Login'}</Link></li>
        <li><button onClick={handleToggleDarkMode}>Toggle Dark Mode</button></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
