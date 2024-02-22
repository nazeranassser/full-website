const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Route for /
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Route for /getdata
app.get("/getdata", (req, res) => {
  // You can replace these dummy values with actual data
  const data = {
    name: "nazera",
    age: 22
  };
  res.json(data);
});

// Route for /getprice
app.get("/getprice", (req, res) => {
  // You can replace these dummy prices with actual data
  const prices = {
    product1: 10,
    product2: 20,
    product3: 30
  };
  res.json(prices);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});