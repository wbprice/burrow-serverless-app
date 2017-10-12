'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    return res.sendFile('index.html');
});

app.get('/style.css', function(req, res) {
    return res.sendFile('style.css');
});

app.listen(8080);
