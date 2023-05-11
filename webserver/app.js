const express = require('express');
const app = express();
//Mongodb
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'las';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  // Get the collection
  const collection = db.collection('people');

  // Find a document and extract the string
  collection.findOne({}, function(err, doc) {
    console.log("hello " + doc);
    client.close();
  });
});



// Serve static files
app.use(express.static('public'));

// Route for the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
  console.log("This web server");
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


/*
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Get the collection
  const collection = db.collection('mycollection');

  // Find a document and extract the string
  collection.findOne({}, function(err, doc) {
    console.log(doc.stringField);
    client.close();
  });
});


{
  "_id": {
    "$oid": "645bc6fbfbdb58fadf31707b"
  },
  name: "James"  
}


*/