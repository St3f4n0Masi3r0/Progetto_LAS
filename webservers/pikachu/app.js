const express = require('express')
const app = express()
const PORT = 8080
const HOST = '0.0.0.0'

// App
app.get('/', (req, res) => {
  res.send('This is pikachu')
});

app.listen(PORT, HOST)
console.log(`Our app running on http://${HOST}:${PORT}`)