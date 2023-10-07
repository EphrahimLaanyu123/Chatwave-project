# ChatWave App

ChatWave is a real-time chat application with user authentication and chatroom functionality. This repository contains both the backend and frontend code for the ChatWave app.

## Features
User registration and authentication
Create and join chatrooms
Real-time messaging within chatrooms
User-friendly interface
Technologies Used
## Backend:

Flask: A Python web framework for building the backend server.
Flask-SQLAlchemy: For managing the database.
Flask-Migrate: For handling database migrations.
Flask-SocketIO: For enabling real-time WebSocket communication.
Flask-RESTful: For creating RESTful API endpoints.
Flask-JWT-Extended: For JWT-based user authentication.
Flask-CORS: For handling Cross-Origin Resource Sharing.
SQLite: As the database management system.
## Frontend:

React: A JavaScript library for building user interfaces.
Axios: For making HTTP requests to the backend API.
Tailwind CSS: A utility-first CSS framework for styling the app.
React Router: For client-side routing within the app.
Backend Setup
Clone this repository to your local machine.
Navigate to the backend directory.
Create a virtual environment and activate it (recommended but optional).
Install the required Python packages using pip install -r requirements.txt.
Set up the database by running flask db init, flask db migrate, and flask db upgrade.
Start the Flask server with flask run.
The backend server will run on http://localhost:5000.

## Frontend Setup
Navigate to the frontend directory.
Install the required Node.js packages using npm install.
Start the React development server with npm start.
The frontend application will run on http://localhost:3000.

## Usage
Access the ChatWave app by opening http://localhost:3000 in your web browser.
Register a new account or log in with existing credentials.
Create or join chatrooms.
Start real-time messaging with other users in the chatroom.
Folder Structure
backend: Contains the Flask backend code.
frontend: Contains the React frontend code.
models.py: Defines the database models.
config.py: Configuration settings for the app.
README.md: This file.
Contributors
[Your Name]
License
This project is licensed under the MIT License - see the LICENSE file for details.
