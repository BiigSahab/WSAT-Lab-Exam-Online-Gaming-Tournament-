import React, { useState } from 'react';

const RegistrationForm = () => {
    const [teamName, setTeamName] = useState('');
    const [playerNames, setPlayerNames] = useState(['']);
    const [error, setError] = useState('');

    const handlePlayerNameChange = (index, value) => {
        const newPlayerNames = [...playerNames];
        newPlayerNames[index] = value;
        setPlayerNames(newPlayerNames);
    };

    const addPlayer = () => {
        setPlayerNames([...playerNames, '']);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!teamName || playerNames.some(name => !name)) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        // Submit the registration data to the backend
        const registrationData = { teamName, players: playerNames };
        console.log('Registration Data:', registrationData);
        // Here you would typically send the data to your backend API
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Your Team</h2>
            <div>
                <label>Team Name:</label>
                <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                />
            </div>
            {playerNames.map((name, index) => (
                <div key={index}>
                    <label>Player {index + 1} Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                        required
                    />
                </div>
            ))}
            <button type="button" onClick={addPlayer}>Add Another Player</button>
            <div>
                <button type="submit">Register Team</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default RegistrationForm;