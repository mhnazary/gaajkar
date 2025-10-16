const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true,
    enum: ['home', 'about', 'portfolio', 'contact']
  },
  language: {
    type: String,
    required: true,
    enum: ['fa', 'ps', 'en']
  }
}, { timestamps: true });

module.exports = mongoose.model('Info', InfoSchema);