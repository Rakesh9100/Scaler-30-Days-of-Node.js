// Problem: Express WebSocket Integration

// Problem Statement: Extend an existing Express application to include WebSocket support. Create a WebSocket server that echoes back any message it receives from a client. Implement an endpoint "/websocket" that serves an HTML page with JavaScript to establish a WebSocket connection.

// npm install ws

const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);

// Function to setup WebSocket server
function setupWebSocket(server) {
    const wss = new WebSocket.Server({ server });
    
    wss.on('connection', (ws) => {
        console.log('Client connected');
        
        ws.on('message', (message) => {
            console.log('Received message:', message);
            ws.send(message);
        });
        
        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}

setupWebSocket(server);

// Endpoint to serve HTML page with WebSocket connection
app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/Day13.html');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
