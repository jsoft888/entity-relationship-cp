const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

// Get all sessions
router.get('/sessions', async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (error) {
    console.error('Error fetching sessions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific session by ID
router.get('/sessions/:id', async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.json(session);
  } catch (error) {
    console.error('Error fetching session by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new session
router.post('/sessions', async (req, res) => {
  const { sportType, schedule, maxCapacity, gymnasium } = req.body;

  try {
    const newSession = new Session({ sportType, schedule, maxCapacity, gymnasium });
    const savedSession = await newSession.save();
    res.status(201).json(savedSession);
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a session by ID
router.put('/sessions/:id', async (req, res) => {
  const { sportType, schedule, maxCapacity, gymnasium } = req.body;

  try {
    const updatedSession = await Session.findByIdAndUpdate(
      req.params.id,
      { sportType, schedule, maxCapacity, gymnasium },
      { new: true }
    );

    if (!updatedSession) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.json(updatedSession);
  } catch (error) {
    console.error('Error updating session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a session by ID
router.delete('/sessions/:id', async (req, res) => {
  try {
    const deletedSession = await Session.findByIdAndDelete(req.params.id);

    if (!deletedSession) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.json({ message: 'Session deleted successfully' });
  } catch (error) {
    console.error('Error deleting session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
