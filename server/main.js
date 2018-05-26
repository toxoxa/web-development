'use strict';
const express = require('express');
const app = express();
const serverPort = 3000;

app.use(express.static('client'));

app.listen(serverPort, () => console.log('Server start'));