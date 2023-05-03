const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));

// Route for the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});