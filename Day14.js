// Problem: Express Caching Middleware

// Problem Statement: Implement a caching middleware for an Express application. The middleware should cache responses based on the request URL and return cached responses for subsequent identical requests. Allow cache expiration after a specified time.

/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
*/

const express = require('express');
const cache = require('memory-cache');

function cachingMiddleware(req, res, next) {
    const cacheKey = req.originalUrl || req.url;
    const cachedResponse = cache.get(cacheKey);
    if (cachedResponse) {
        console.log('Cache hit for', cacheKey);
        res.send(cachedResponse);
        return;
    }

    const originalSend = res.send;
    res.send = function (body) {
        cache.put(cacheKey, body, 10 * 1000);
        console.log('Cached response for', cacheKey);
        originalSend.call(this, body);
    };

    next();
}


const app = express();
app.use(cachingMiddleware);

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
