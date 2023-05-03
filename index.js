const http = require('http');
const path = require('path');
const fs = require('fs');

/* function stopserver() {
  server.close(() => {
    console.log('Server stopped listening on port 5000');
  });
} */

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    console.log(`Path:`, path);
    console.log(__dirname);
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(`Error loading index.html: ${err}`);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      }
    );
  }

  if (req.url === '/api/users') {
    const users = [
      { name: 'Bob Smith', age: 40 },
      { name: 'John Doe', age: 30 },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
