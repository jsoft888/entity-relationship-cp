const express = require('express');
const router = express.Router();
const Gymnasium = require('../models/Gymnasium');

// Get all gymnasiums
router.get('/gymnasiums', async (req, res) => {
  try {
    const gymnasiums = await Gymnasium.find();
    res.json(gymnasiums);
  } catch (error) {
    console.error('Error fetching gymnasiums:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific gymnasium by ID
router.get('/gymnasiums/:id', async (req, res) => {
  try {
    const gymnasium = await Gymnasium.findById(req.params.id);
    if (!gymnasium) {
      return res.status(404).json({ error: 'Gymnasium not found' });
    }
    res.json(gymnasium);
  } catch (error) {
    console.error('Error fetching gymnasium by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new gymnasium
router.post('/gymnasiums', async (req, res) => {
  const { name, address, telephone } = req.body;

  try {
    const newGymnasium = new Gymnasium({ name, address, telephone });
    const savedGymnasium = await newGymnasium.save();
    res.status(201).json(savedGymnasium);
  } catch (error) {
    console.error('Error creating gymnasium:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a gymnasium by ID
router.put('/gymnasiums/:id', async (req, res) => {
  const { name, address, telephone } = req.body;

  try {
    const updatedGymnasium = await Gymnasium.findByIdAndUpdate(
      req.params.id,
      { name, address, telephone },
      { new: true }
    );

    if (!updatedGymnasium) {
      return res.status(404).json({ error: 'Gymnasium not found' });
    }

    res.json(updatedGymnasium);
  } catch (error) {
    console.error('Error updating gymnasium:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a gymnasium by ID
router.delete('/gymnasiums/:id', async (req, res) => {
  try {
    const deletedGymnasium = await Gymnasium.findByIdAndDelete(req.params.id);

    if (!deletedGymnasium) {
      return res.status(404).json({ error: 'Gymnasium not found' });
    }

    res.json({ message: 'Gymnasium deleted successfully' });
  } catch (error) {
    console.error('Error deleting gymnasium:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
