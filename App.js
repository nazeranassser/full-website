import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    // Fetching data from server when the component mounts
    fetch('http://localhost:8000/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));

    fetch('http://localhost:8000/getdata')
      .then(response => response.json())
      .then(data => setData(data));

    fetch('http://localhost:8000/getprice')
      .then(response => response.json())
      .then(data => setPrices(data));
  }, []);

  return (
    <div className="container">
      <h1>React App</h1>
      <p>Message from server: {message}</p>
      <p>Data: {data ? `Name: ${data.name}, Age: ${data.age}` : 'Loading...'}</p>
      <div className="prices">
        {prices ? (
          Object.entries(prices).map(([product, price]) => (
            <div key={product} className="box">
              <p>{product}</p>
              <p>${price}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;