// Problem: MongoDB Connection Setup

// Problem Statement: Create an Express application with MongoDB integration using Mongoose. Implement a function to establish a connection to a MongoDB database. Ensure that the connection is successful and log a success message.

// npm install mongoose

const express = require('express');
const mongoose = require('mongoose');

const app = express();

/**
 * Establishes a connection to MongoDB using Mongoose
 */

function connectToMongoDB() {
    const mongoDBURI = 'mongodb://localhost:27017/Rakesh';

    mongoose.connect(mongoDBURI);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    db.once('open', () => {
        console.log('Connected to MongoDB successfully!');
    });
}

connectToMongoDB();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
