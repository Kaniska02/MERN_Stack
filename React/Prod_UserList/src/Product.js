import React from 'react';

const Product = () => {
  
  const fetchData = () => {
    fetch('https://api.restful-api.dev/objects')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          console.log(item.name);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  fetchData();

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default Product;
