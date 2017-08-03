const express = require("express");
const app = express();

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));