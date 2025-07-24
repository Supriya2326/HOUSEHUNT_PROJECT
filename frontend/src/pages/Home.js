import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/properties')
      .then(res => setProperties(res.data));
  }, []);

  return (
    <div>
      <h1>Househunt - Find Your Perfect Rental</h1>
      {properties.map((property) => (
        <div key={property._id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h3>{property.title}</h3>
          <p>{property.location} - ₹{property.price}/month</p>
          <img src={property.image} alt={property.title} width="200" />
        </div>
      ))}
    </div>
  );
}

export default Home;
