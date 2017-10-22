'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/dashboard', function(req, res) {
    return res.sendFile(path.join(__dirname, 'dist', 'dashboard.html'));
});

app.get('/style.css', function(req, res) {
    return res.sendFile(path.join(__dirname, 'dist', 'style.css'));
});

app.listen(8080);
