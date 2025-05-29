import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TournamentList = () => {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const response = await axios.get('/api/tournaments');
                setTournaments(response.data);
            } catch (err) {
                setError('Error fetching tournaments');
            } finally {
                setLoading(false);
            }
        };

        fetchTournaments();
    }, []);

    if (loading) {
        return <div>Loading tournaments...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Tournament List</h2>
            <ul>
                {tournaments.map(tournament => (
                    <li key={tournament._id}>
                        <h3>{tournament.name}</h3>
                        <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
                        <p>Participants: {tournament.participants.length}</p>
                        <p>Rules: {tournament.rules}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TournamentList;