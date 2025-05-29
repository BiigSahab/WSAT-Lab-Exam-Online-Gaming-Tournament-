import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TournamentDetails = () => {
    const { id } = useParams();
    const [tournament, setTournament] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTournamentDetails = async () => {
            try {
                const response = await fetch(`/api/tournaments/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch tournament details');
                }
                const data = await response.json();
                setTournament(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTournamentDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>{tournament.name}</h1>
            <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
            <h2>Rules and Regulations</h2>
            <p>{tournament.rules}</p>
            <h2>Participants</h2>
            <ul>
                {tournament.participants.map((participant) => (
                    <li key={participant.id}>{participant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TournamentDetails;