# Gaming Tournament Registration System

## Overview
This project is an online gaming tournament registration system built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to register for competitive esports tournaments, view tournament details, and manage their team registrations.

## Features
- User registration for tournaments
- View tournament details
- Manage team registrations
- RESTful API for tournament operations

## Project Structure
```
gaming-tournament-registration
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── tournamentController.js
│   │   ├── models
│   │   │   └── Tournament.js
│   │   ├── routes
│   │   │   └── tournamentRoutes.js
│   │   ├── app.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── TournamentList.jsx
│   │   │   ├── RegistrationForm.jsx
│   │   │   └── TeamManagement.jsx
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   └── TournamentDetails.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `backend/src/config/db.js`.
4. Start the server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints
- **GET /api/tournaments**: Retrieve a list of tournaments.
- **POST /api/tournaments**: Create a new tournament.
- **GET /api/tournaments/:id**: Retrieve details of a specific tournament.
- **PUT /api/tournaments/:id**: Update a tournament.
- **DELETE /api/tournaments/:id**: Delete a tournament.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.