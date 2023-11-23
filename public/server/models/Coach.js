const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
});

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;
