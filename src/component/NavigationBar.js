// components/NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FiHome, FiLogOut, FiLogIn, FiSun, FiMoon, FiUser, FiMenu } from 'react-icons/fi';

const NavigationBar = () => {
  const { user, logout, login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-${theme === 'dark' ? 'gray-800' : 'yellow-300'} p-4 flex items-center justify-between`}>

      <div className="flex items-center">
        <Link to="/dashboard" className={`text-${theme === 'dark' ? 'white' : 'black'} text-lg`}>
          <FiHome className="mr-2" />
          Home
        </Link>
        <h1 className={`text-${theme === 'dark' ? 'white' : 'black'} text-2xl ml-4`}>Weather App</h1>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <>
            <span className={`text-${theme === 'dark' ? 'white' : 'black'}`}>Hello, {user.name}</span>
            <Link to="/" onClick={logout} className={`text-${theme === 'dark' ? 'white' : 'black'}`}>
              <FiLogOut className="ml-2" />
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className={`text-${theme === 'dark' ? 'white' : 'black'}`}>
              <FiLogIn className="mr-1" />
              Login
            </Link>
          </>
        )}
        <button onClick={toggleTheme} className={`text-${theme === 'dark' ? 'white' : 'black'}`}>
          {theme === 'dark' ? <FiMoon className="mr-1" /> : <FiSun className="mr-1" />}
          Toggle {theme} Mode
        </button>
      </div>

      {/* Mobile Menu */}
      {/* <div className="md:hidden">
        <button onClick={handleMobileMenuToggle} className={`text-${theme === 'dark' ? 'white' : 'black'}`}>
          <FiMenu className="text-2xl" />
        </button>
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-${theme === 'dark' ? 'white' : 'black'}`}>
                Home
              </Link>
              {user ? (
                <>
                  <span className={`text-${theme === 'dark' ? 'white' : 'black'}`}>Hello, {user.name}</span>
                  <Link to="/" onClick={() => { setMobileMenuOpen(false); logout(); }} className={`text-${theme === 'dark' ? 'white' : 'black'}`}>
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)} className={`text-${theme === 'dark' ? 'white' : 'black'}`}>
                    Login
                  </Link>
                </>
              )}
              <button onClick={() => { setMobileMenuOpen(false); toggleTheme(); }} className={`text-${theme === 'dark' ? 'white' : 'black'}`}>
                Toggle Dark Mode
              </button>
            </div>
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default NavigationBar;
