// src/pages/UserList.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store';

export default function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data.data)); // Store response in Redux store
      });
  }, [dispatch]);

  return (
    <div>
      <h1>User List</h1>
      <p>Fetching data...</p>
    </div>
  );
}
