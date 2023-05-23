const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  name: String,
  surname: String,
  // ...other fields
});

const People = mongoose.model('People', peopleSchema);

module.exports = People;
