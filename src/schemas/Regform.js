// node modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const RegformSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true
  },

  submissionTime: Date
});

module.exports = RegformSchema;
