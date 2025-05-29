# Gaming Tournament Registration System

## Backend Documentation

### Overview
This backend service is built using Node.js and Express, and it serves as the API for the Gaming Tournament Registration System. It allows users to register for esports tournaments, view tournament details, and manage their team registrations.

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gaming-tournament-registration/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the database**
   - Update the database connection settings in `src/config/db.js` to match your MongoDB setup.

4. **Run the application**
   ```bash
   npm start
   ```

### API Endpoints

- **GET /api/tournaments**: Retrieve a list of all tournaments.
- **GET /api/tournaments/:id**: Retrieve details of a specific tournament by ID.
- **POST /api/tournaments**: Create a new tournament.
- **PUT /api/tournaments/:id**: Update an existing tournament by ID.
- **DELETE /api/tournaments/:id**: Delete a tournament by ID.

### Technologies Used
- Node.js
- Express
- Mongoose
- MongoDB

### Folder Structure
- **src**: Contains the main application code.
  - **controllers**: Contains the logic for handling requests.
  - **models**: Contains the Mongoose models.
  - **routes**: Contains the API route definitions.
  - **config**: Contains configuration files, including database connection.
  
### Contribution
Feel free to contribute to this project by submitting issues or pull requests.