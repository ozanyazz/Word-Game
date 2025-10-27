# Word Game Project

## Overview
This project is a Word Game application designed as a Farcaster Mini App. It features a frontend built with React and TypeScript, and a backend powered by Express.js. The application allows users to play a word game while storing scores off-chain.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **Technologies**: React, TypeScript
- **Directory**: `frontend`
  - **package.json**: Contains dependencies and scripts for the frontend application.
  - **tsconfig.json**: TypeScript configuration for the frontend.
  - **public/index.html**: Main HTML file served by the frontend.
  - **src/**: Contains the source code for the frontend application.
    - **main.tsx**: Entry point for the frontend application.
    - **App.tsx**: Main App component.
    - **pages/Game.tsx**: Game page component with game logic and UI.
    - **components/**: Contains reusable components like `Board.tsx` and `Keyboard.tsx`.
    - **hooks/useGame.ts**: Custom hook for managing game state.
    - **services/api.ts**: Functions for making API calls to the backend.
    - **styles/globals.css**: Global CSS styles.

### Backend
- **Technologies**: Node.js, Express, TypeScript
- **Directory**: `backend`
  - **package.json**: Contains dependencies and scripts for the backend application.
  - **tsconfig.json**: TypeScript configuration for the backend.
  - **src/**: Contains the source code for the backend application.
    - **index.ts**: Entry point for the backend application, setting up the Express server.
    - **app.ts**: Exports the Express app instance and middleware setup.
    - **controllers/gameController.ts**: Functions for handling game-related requests.
    - **routes/gameRoutes.ts**: Routes for game-related endpoints.
    - **services/gameService.ts**: Functions for game logic and data handling.
    - **models/word.ts**: Model representing a word for database interactions.
    - **utils/logger.ts**: Utility functions for logging.
    - **types/index.d.ts**: TypeScript types and interfaces used throughout the backend.

## Getting Started
To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd word-game
   ```

2. **Install dependencies**:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd ../backend
     npm install
     ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env` in both `frontend` and `backend` directories and fill in the required values.

4. **Run the applications**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend application:
     ```bash
     cd ../frontend
     npm start
     ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.