// Problem: Express Middleware

// Problem Statement: Implement an Express middleware function that logs the timestamp and the HTTP method of every incoming request to the server.

const express = require('express');
const app = express();

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

function requestLoggerMiddleware(req, res, next) {
    // Get the current timestamp
    const timestamp = new Date().toLocaleString();
    console.log(`${timestamp} - ${req.method} request received.`);
    next();
}

app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
    res.send('Day 7 successfully completed!!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
