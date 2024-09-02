import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './redux/config';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Web from './Web.js'
import './App.css';

// Define routes for the application
const routerPaths = createBrowserRouter([
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/web', element: <Web /> },
]);

function App() {
  return (
    <Provider store={myStore}>
      <div>
        <RouterProvider router={routerPaths} />
      </div>
    </Provider>
  );
}

export default App;