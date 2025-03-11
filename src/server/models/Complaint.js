
const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  incidentDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  preferredContact: {
    type: String,
    enum: ['email', 'phone', 'both'],
    required: true
  },
  type: {
    type: String,
    enum: ['women-children', 'online-fraud', 'cyber-crime'],
    required: true
  },
  referenceNumber: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['submitted', 'under-review', 'in-progress', 'resolved', 'closed'],
    default: 'submitted'
  },
  submissionDate: {
    type: Date,
    default: Date.now
  },
  agreeToTerms: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
