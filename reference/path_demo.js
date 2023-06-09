const { rmSync } = require('fs');
const path = require('path');

// Base file name
console.log(__filename);
console.log(`Filename: ${__filename}`);
console.log(`Basename: ${path.basename(__filename)}`);

// Directory name
console.log(`Dirname: ${path.dirname(__filename)}`);

// File extension
console.log(`Extname: ${path.extname(__filename)}`);

// Create path object
console.log(`Path object: ${path.parse(__filename)}`);
console.log(path.parse(__filename));

// Concatenate paths
console.log(
  `Join path: ${path.join(__dirname, 'part1', 'part2', 'hello.html')}`
);
