// Create web server
// Run: node comments.js
// Access: http://localhost:3000
// Access: http://localhost:3000/comments
// Access: http://localhost:3000/comments/1
// Access: http://localhost:3000/comments/2

// Import modules
const express = require('express');
const app = express();
const comments = require('./comments.json');

// Set port
const port = 3000;

// Set static folder
app.use(express.static(__dirname + '/public'));

// Set routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.get('/comments/:id', (req, res) => {
    res.send(comments[req.params.id]);
});

// Run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});