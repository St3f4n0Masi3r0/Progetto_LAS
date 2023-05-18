const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
const People = require('./models/people'); // Update the path and file name as necessary

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

mongoose.connect('mongodb://mongodb1:27017,mongodb2:27017,mongodb3:27017/?replicaSet=rs0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});


app.get('/', (req, res) => {
  res.send({ message: 'Hello, there!' });
});

app.listen(3000,() => {
  console.log('Server is running on port 3000');
});



app.get('/people', async (req, res) => {
    try {
      const people = await People.find(); // Retrieve people from the database
      res.json(people); // Send the people as a JSON response
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving people', error: error.message });
    }
});

app.post('/person', async (req, res) => {
    try {
      const { name, surname } = req.body; // Assuming the request body contains the name and age properties
      const newPerson = new People({ name, surname }); // Create a new instance of the People model
  
      // Save the new person to the database
      const savedPerson = await newPerson.save();
  
      res.json(savedPerson); // Send the saved person as a JSON response
    } catch (error) {
      res.status(500).json({ message: 'Error creating person', error: error.message });
    }
});

app.delete('/people/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await People.findByIdAndDelete(id);
      res.sendStatus(204); // Send a successful response with status code 204 (No Content)
    } catch (error) {
      res.status(500).json({ message: 'Error deleting person', error: error.message });
    }
});
  

  // curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "surname": "Doe"}' http://localhost:3000/people
