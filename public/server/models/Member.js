const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  uniqueIdentifier: {
    type: String,
    unique: true,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  gymnasium: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gymnasium', // Assuming you have a Gymnasium model
    required: true,
  },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
