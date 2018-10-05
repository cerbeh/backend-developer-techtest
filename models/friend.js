const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  name: { type: String, require: true },
  county: { type: String, require: true },
  postCode: { type: String, require: true }
});

module.exports = mongoose.model('Friend', friendSchema);
