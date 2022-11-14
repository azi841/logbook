const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database 
mongoose.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ' + config.url);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const app = express();

const users = require('./routes/users');
const patients = require('./routes/patients');

// Port Number
const port = process.env.PORT || 4000;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(express.json());

app.use('/users', users);
app.use('/patients', patients);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/logbook/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
