'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
   const r = parseFloat(req.params.r);
  if (isNaN(r) || r <= 0) {
    return res.status(400).json({ error: 'Promień musi być liczbą większą od 0.' });
  }

  const area = Math.PI * r * r;
  const circumference = 2 * Math.PI * r;

  const result = {
    area: area.toFixed(2),
    circumference: circumference.toFixed(2)
  }; 
  res.json(result)
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
    return res.status(400).json({ error: 'Szerokość i wysokość muszą być liczbami większymi od 0.' });
  }

  const area = width * height;
  const perimeter = 2 * (width + height);

  const result = {
    area: area.toFixed(2),
    perimeter: perimeter.toFixed(2)
  };
  res.json(result);
});


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
