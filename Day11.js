// Problem: Express Authentication Middleware

// Problem Statement: Implement an authentication middleware for an Express application. The middleware should check for the presence of a valid JWT (JSON Web Token) in the request headers. If a valid token is present, allow the request to proceed; otherwise, return a 401 Unauthorized status.

const express = require('express');
const jwt = require('jsonwebtoken');

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(token, '5f27df179b0af1496d5a6d0faa84c2f927b2486a31afefb544922936c7821452');

        req.user = decoded;
        next();
    } catch (error) {
        // If token is invalid, return 401 Unauthorized
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
}

const app = express();

app.use(express.json());

app.get('/protected-route', authenticationMiddleware, (req, res) => {
    res.send('Protected route: User authenticated');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
