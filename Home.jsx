import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to GamesCon</h1>
            <p>The biggest gaming tournament in the world!</p>
            <p>Get a chance to meet your favorite players and compete for glory.</p>
            <Link to="/register">
                <button>Team Registration</button>
            </Link>
            <h2>Rules and Regulations:</h2>
            <p>- If caught using any 3rd Party Software to gain an advantage, you will be disqualified and fined Rs.10,000.</p>
            <Link to="/tournaments">
                <button>View Tournaments</button>
            </Link>
        </div>
    );
};

export default Home;