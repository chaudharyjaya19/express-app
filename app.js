const express = require('express');
const app = express();
const port = 3000;

// Sample JSON data
const data = require('./data.json');

// GET endpoint to render JSON data
app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
