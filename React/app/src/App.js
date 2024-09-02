

import React, { useState } from 'react';
import './App.css';
import Home from './Home.js';


function App() {
  let firstname = "Adhi";
  const [email, setEmail] = useState('adithya@gmail.com');
  const [address, setAddress] = useState('Chennai');
  const [mobile, setMobile] = useState('');

  const validate = () => {
    if (email === "") {
      alert("Email is empty");
    } else if (mobile === "") {
      alert("Mobile is empty");
    } else {
      alert("Everything is fine");
    }
  }

  return (
    <div className="container">
      <h1>This is a React app</h1>
      {firstname}
      <h2>Email: {email}</h2>
      <Home />
      <h2>Address: {address}</h2>
      <input 
        type="text" 
        placeholder="Enter new address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br /><br />
      <h2>Mobile: {mobile}</h2>
      <input 
        type="number" 
        placeholder="Enter Mobile Number"
        onChange={(e) => setMobile(e.target.value)}
      />
      <br /><br />
      <button onClick={validate}>Click</button>
    </div>
  );
}

export default App;
