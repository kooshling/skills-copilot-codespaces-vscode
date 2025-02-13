// Create a web server that listens on port 3000 and serves the comments page.
// The comments page should display all comments from the comments array. 
// The comments should be displayed in the order they were posted, with the most recent comments appearing at the top of the page.

const http = require('http');
const fs = require('fs');

const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.write('<h1>Comments</h1>');
  
  comments.forEach((comment) => {
    res.write(`<h3>${comment.name}</h3>`);
    res.write(`<p>${comment.message}</p>`);
  });
  
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});