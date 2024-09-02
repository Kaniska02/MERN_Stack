// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';
import ShowUserList from './pages/showUserList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/show-user-list" element={<ShowUserList />} />
      </Routes>
    </Router>
  );
}

export default App;
