const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  program: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Student', StudentSchema);