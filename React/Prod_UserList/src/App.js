import React, { useState } from 'react';
import Product from './Product';
import UserList from './UserList';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Product');

  const renderPage = () => {
    if (currentPage === 'Product') {
      return <Product />;
    } else if (currentPage === 'UserList') {
      return <UserList />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('Product')}>Product</button>
        <button onClick={() => setCurrentPage('UserList')}>User List</button>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;
