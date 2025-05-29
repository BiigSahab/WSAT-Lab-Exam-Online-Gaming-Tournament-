const express = require('express');
const mongoose = require('mongoose');
const tournamentRoutes = require('./routes/tournamentRoutes');
const app = express();

// Middleware
app.use(express.json());

// Database connection
const db = require('./config/db');
db();

// Routes
app.use('/api/tournaments', tournamentRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});