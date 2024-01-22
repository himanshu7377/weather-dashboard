// components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

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

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      login(user);
      navigate('/dashboard');
    } else {
      // Handle failed login
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
