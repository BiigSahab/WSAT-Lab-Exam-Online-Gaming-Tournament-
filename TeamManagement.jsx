import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamManagement = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('/api/teams'); // Adjust the endpoint as necessary
                setTeams(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    const handleUpdateTeam = async (teamId, updatedData) => {
        try {
            await axios.put(`/api/teams/${teamId}`, updatedData);
            setTeams(teams.map(team => (team._id === teamId ? { ...team, ...updatedData } : team)));
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeleteTeam = async (teamId) => {
        try {
            await axios.delete(`/api/teams/${teamId}`);
            setTeams(teams.filter(team => team._id !== teamId));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <p>Loading teams...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Team Management</h2>
            <ul>
                {teams.map(team => (
                    <li key={team._id}>
                        <span>{team.name}</span>
                        <button onClick={() => handleUpdateTeam(team._id, { /* updated data */ })}>Update</button>
                        <button onClick={() => handleDeleteTeam(team._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamManagement;