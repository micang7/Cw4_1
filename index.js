'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);
  if (isNaN(r) || r <= 0) {
    res.status(400).json({ error: "Invalid radius" });
  }
  const result = {
    area: (Math.PI * r * r).toFixed(2),
    circumference: (2 * Math.PI * r).toFixed(2),
  };
  res.json(result);
});

app.get("/math/rectangle/:width/:height", (req, res) => {
  const w = parseFloat(req.params.width);
  const h = parseFloat(req.params.height);
  if (isNaN(w) || w <= 0 || isNaN(h) || h <= 0) {
    res.status(400).json({ error: "Invalid width or height" });
  }
  const result = {
    area: (w * h).toFixed(2),
    perimeter: (2 * (w + h)).toFixed(2),
  };
  res.json(result);
});


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});