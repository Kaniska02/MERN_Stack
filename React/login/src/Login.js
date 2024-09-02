import React, { useState } from 'react';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const validEmail = 'eve.holt@reqres.in';
    const validPassword = 'cityslicka';

    if (username === validEmail && password === validPassword) {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setMessage('Login successful!');
          console.log('Token:', data.token); 
        } else {
          setMessage('Login failed. Please try again.');
        }
      })
      .catch(() => setMessage('An error occurred. Please try again later.'));
    } else {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter username" 
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password" 
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
