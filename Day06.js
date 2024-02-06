// Problem: Express Route Handling

// Problem Statement: You are building a web application using Express in Node.js. Create an Express route to handle GET requests to the endpoint "/greet" that takes a query parameter "name" and returns a personalized greeting. If the name parameter is not provided, the default greeting should be "Hello, Guest!".

const express = require('express');
const app = express();

function greetHandler(req, res) {
    console.log(`Hello, ${req.query.name}`);

    const name = req.query.name;
    if (name) {
        res.send(`Hello, ${name}!`);
    } else {
        res.send('Hello, Guest!');
    }
}

// Defined route for handling GET requests to "/greet"
app.get('/greet', greetHandler);

// Defined route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Welcome to my Express application!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
