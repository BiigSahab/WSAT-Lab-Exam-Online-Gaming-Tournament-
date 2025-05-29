class TournamentController {
    constructor(Tournament) {
        this.Tournament = Tournament;
    }

    async createTournament(req, res) {
        try {
            const tournament = new this.Tournament(req.body);
            await tournament.save();
            res.status(201).json(tournament);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getTournaments(req, res) {
        try {
            const tournaments = await this.Tournament.find();
            res.status(200).json(tournaments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTournamentById(req, res) {
        try {
            const tournament = await this.Tournament.findById(req.params.id);
            if (!tournament) {
                return res.status(404).json({ message: 'Tournament not found' });
            }
            res.status(200).json(tournament);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateTournament(req, res) {
        try {
            const tournament = await this.Tournament.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!tournament) {
                return res.status(404).json({ message: 'Tournament not found' });
            }
            res.status(200).json(tournament);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteTournament(req, res) {
        try {
            const tournament = await this.Tournament.findByIdAndDelete(req.params.id);
            if (!tournament) {
                return res.status(404).json({ message: 'Tournament not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default TournamentController;