// Create web server 
// 1. Create a web server
// 2. Listen to port 3000
// 3. Handle GET request to /comments
// 4. Return a JSON response with a list of comments

// 1. Create a web server
const express = require('express');
const app = express();

// 3. Handle GET request to /comments
app.get('/comments', (req, res) => {
    const comments = [
        { name: 'John', message: 'Hello' },
        { name: 'Jane', message: 'Hi' },
    ];
    res.json(comments);
});

// 2. Listen to port 3000
app.listen(3000, () => {
    console.log('Server is running');
});