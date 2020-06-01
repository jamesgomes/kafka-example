// app.js
const express = require('express');
const newOrder = require('./lib/kafka/newOrder');

const app = express();

app.get('/', (req, res) => {
  newOrder.createOrder();
  res.send('Hello World!');
});

app.listen(3000, () => console.log('Server running on port 3000!'));
