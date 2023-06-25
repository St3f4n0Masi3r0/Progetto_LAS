const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
const People = require('./models/people'); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

mongoose.connect('mongodb://mongodb1:27017,mongodb2:27018,mongodb3:27019/?replicaSet=rs0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  readPreference: 'secondary'
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});


app.get('/api/', (req, res) => {
  res.send({ message: 'Hello, there!' });
});

app.listen(3001,() => {
  console.log('Server is running on port 3000');
});



app.get('/api/people', async (req, res) => {
    try {
      const people = await People.find();
      res.json(people); 
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving people', error: error.message });
    }
});

app.post('/api/person', async (req, res) => {
    try {
      const { name, surname } = req.body;
      const newPerson = new People({ name, surname });
  
      
      const savedPerson = await newPerson.save();
  
      res.json(savedPerson); 
    } catch (error) {
      res.status(500).json({ message: 'Error creating person', error: error.message });
    }
});

app.delete('/api/people/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await People.findByIdAndDelete(id);
      res.sendStatus(204); 
    } catch (error) {
      res.status(500).json({ message: 'Error deleting person', error: error.message });
    }
});
  

  // curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "surname": "Doe"}' http://localhost:3000/people
