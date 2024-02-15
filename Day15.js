// Problem: Express Logging Middleware

// Problem Statement: Create a logging middleware for an Express application. The middleware should log detailed information about each incoming request, including the timestamp, HTTP method, URL, request headers, and request body.

const express = require('express');
const app = express();

function loggingMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();

    // Log detailed information about the incoming request
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);

    next();
}

app.use(express.json());
app.use(loggingMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, Everyone!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
