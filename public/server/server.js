const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const gymnasiumRoutes = require('./routes/gymnasiumRoutes');
const memberRoutes = require('./routes/memberRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const coachRoutes = require('./routes/coachRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());

// Routes
app.use('/api', gymnasiumRoutes);
app.use('/api', memberRoutes);
app.use('/api', sessionRoutes);
app.use('/api', coachRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
