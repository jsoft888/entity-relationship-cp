const express = require('express');
const router = express.Router();
const Coach = require('../models/Coach');

// Get all coaches
router.get('/coaches', async (req, res) => {
  try {
    const coaches = await Coach.find();
    res.json(coaches);
  } catch (error) {
    console.error('Error fetching coaches:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific coach by ID
router.get('/coaches/:id', async (req, res) => {
  try {
    const coach = await Coach.findById(req.params.id);
    if (!coach) {
      return res.status(404).json({ error: 'Coach not found' });
    }
    res.json(coach);
  } catch (error) {
    console.error('Error fetching coach by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new coach
router.post('/coaches', async (req, res) => {
  const { lastName, firstName, age, specialty } = req.body;

  try {
    const newCoach = new Coach({ lastName, firstName, age, specialty });
    const savedCoach = await newCoach.save();
    res.status(201).json(savedCoach);
  } catch (error) {
    console.error('Error creating coach:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a coach by ID
router.put('/coaches/:id', async (req, res) => {
  const { lastName, firstName, age, specialty } = req.body;

  try {
    const updatedCoach = await Coach.findByIdAndUpdate(
      req.params.id,
      { lastName, firstName, age, specialty },
      { new: true }
    );

    if (!updatedCoach) {
      return res.status(404).json({ error: 'Coach not found' });
    }

    res.json(updatedCoach);
  } catch (error) {
    console.error('Error updating coach:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a coach by ID
router.delete('/coaches/:id', async (req, res) => {
  try {
    const deletedCoach = await Coach.findByIdAndDelete(req.params.id);

    if (!deletedCoach) {
      return res.status(404).json({ error: 'Coach not found' });
    }

    res.json({ message: 'Coach deleted successfully' });
  } catch (error) {
    console.error('Error deleting coach:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
