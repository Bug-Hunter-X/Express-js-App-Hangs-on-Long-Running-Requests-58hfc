const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  setTimeout(() => {
    res.end('Hello!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});