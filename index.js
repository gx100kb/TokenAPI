const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const utils = require('./utils');
const config = require('./config.json')
const mysql = require('mysql');
const port = 3000;
const fs = require('fs');

app.use(bodyParser.json());

app.get('/api', utils.verifyToken, (req, res, next) => {
    res.json({ connection: true });
});

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}/`);
  });