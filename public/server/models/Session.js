const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  sportType: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  maxCapacity: {
    type: Number,
    default: 20, // Assuming a default max capacity of 20
  },
  gymnasium: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gymnasium', // Assuming you have a Gymnasium model
    required: true,
  },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
