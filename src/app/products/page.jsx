"use client"
import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/example');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}> {/* Assuming each product has a unique 'id' */}
          <img src={product.img} alt={`Image of ${product.title}`} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;