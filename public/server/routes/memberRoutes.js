const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// Get all members
router.get('/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific member by ID
router.get('/members/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    console.error('Error fetching member by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new member
router.post('/members', async (req, res) => {
  const { uniqueIdentifier, lastName, firstName, address, dateOfBirth, gender, gymnasium } = req.body;

  try {
    const newMember = new Member({ uniqueIdentifier, lastName, firstName, address, dateOfBirth, gender, gymnasium });
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    console.error('Error creating member:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a member by ID
router.put('/members/:id', async (req, res) => {
  const { uniqueIdentifier, lastName, firstName, address, dateOfBirth, gender, gymnasium } = req.body;

  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      { uniqueIdentifier, lastName, firstName, address, dateOfBirth, gender, gymnasium },
      { new: true }
    );

    if (!updatedMember) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.json(updatedMember);
  } catch (error) {
    console.error('Error updating member:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a member by ID
router.delete('/members/:id', async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);

    if (!deletedMember) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    console.error('Error deleting member:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
