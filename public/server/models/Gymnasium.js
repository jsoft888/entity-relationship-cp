const mongoose = require('mongoose');

const gymnasiumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
});

const Gymnasium = mongoose.model('Gymnasium', gymnasiumSchema);

module.exports = Gymnasium;
