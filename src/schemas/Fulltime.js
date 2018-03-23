// node modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const FulltimeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  industry: {
    type: String,
    required: true,
    trim: true
  },

  company: {
    type: String,
    required: true,
    trim: true
  },

  position: {
    type: String,
    required: true,
    trim: true
  },

  location: {
    type: String,
    required: true,
    trim: true
  },

  gradYear: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = FulltimeSchema;
