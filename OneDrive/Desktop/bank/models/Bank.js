const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  bankCode: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  bankName: {
    type: String,
    required: true,
    trim: true
  },
  headquarters: {
    type: String,
    required: true
  },
  numberOfBranches: {
    type: Number,
    required: true
  },
  totalAssets: {
    type: Number,
    required: true
  },
  isInternational: {
    type: Boolean,
    required: true
  },
  establishedYear: {
    type: Number,
    required: true
  },
  contactEmail: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Bank', bankSchema);
