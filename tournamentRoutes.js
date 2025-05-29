const express = require('express');
const router = express.Router();
const TournamentController = require('../controllers/tournamentController');

const tournamentController = new TournamentController();

// Route to create a new tournament
router.post('/tournaments', tournamentController.createTournament);

// Route to get all tournaments
router.get('/tournaments', tournamentController.getAllTournaments);

// Route to get a specific tournament by ID
router.get('/tournaments/:id', tournamentController.getTournamentById);

// Route to update a tournament by ID
router.put('/tournaments/:id', tournamentController.updateTournament);

// Route to delete a tournament by ID
router.delete('/tournaments/:id', tournamentController.deleteTournament);

module.exports = router;