// context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Define the users array outside the component to avoid unnecessary recreations
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
  },
  {
    "name": "Himanshu",
    "username": "2",
    "password": "2",
    "city": "Bangalore"
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 

  const login = (username,password) => {
    
    const authenticatedUser = users.find((u) => u.username === username && u.password === password);

    if (authenticatedUser) {
      // If credentials are valid, set the user in the state
      setUser(authenticatedUser);
     
      return true
    } else {
      // If credentials are not valid, handle the error 
      console.log(' auth Invalid credentials. Please try again .');
      return false
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
