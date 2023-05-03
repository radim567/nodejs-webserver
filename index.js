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
    res.end('<h1>Home</h1>');
  }
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
