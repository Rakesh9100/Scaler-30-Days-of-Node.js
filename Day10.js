// Problem: Express Static Files

// Problem Statement: Create an Express application that serves static files (e.g., HTML, CSS, images) from a "public" directory. Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.

const express = require('express');
const path = require('path');
const app = express();

// Defined the directory containing static files
const publicDirectoryPath = path.join(__dirname, 'public');

// Serve static files from the "public" directory
app.use(express.static(publicDirectoryPath));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

// Make sure to keep your files in the public directory.
