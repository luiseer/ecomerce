const express = require('express');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

// Routers


const app = express();

// Enable incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.use('/api/v1/users', (req, res)=>{
    res.send('hello')
});

app.use(globalErrorHandler);

module.exports = { app };
