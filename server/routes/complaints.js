
const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Get all complaints
router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get complaint by reference number
router.get('/:referenceNumber', async (req, res) => {
  try {
    const complaint = await Complaint.findOne({ referenceNumber: req.params.referenceNumber });
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new complaint
router.post('/', async (req, res) => {
  try {
    const referenceNumber = `CYB-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
    
    const complaint = new Complaint({
      ...req.body,
      referenceNumber,
      status: 'submitted',
      submissionDate: new Date()
    });
    
    const savedComplaint = await complaint.save();
    res.status(201).json(savedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update complaint status
router.patch('/:id', async (req, res) => {
  try {
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    
    if (!updatedComplaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    
    res.json(updatedComplaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
