
# HackAlert Installation Guide

This project consists of a React frontend and an Express/MongoDB backend.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local installation or MongoDB Atlas account)

## Frontend Setup

1. Install frontend dependencies:
   ```
   npm install
   ```

2. Start the frontend development server:
   ```
   npm run dev
   ```

## Backend Setup

1. Navigate to the server directory:
   ```
   cd src/server
   ```

2. Install backend dependencies:
   ```
   npm install
   ```

3. Configure MongoDB:
   - Make sure MongoDB is running locally on port 27017, or
   - Update the `MONGODB_URI` in the `.env` file to point to your MongoDB instance

4. Start the backend server:
   ```
   npm run dev
   ```

## Running the Complete Application

1. Start the backend server (from the src/server directory):
   ```
   npm run dev
   ```

2. In a separate terminal, start the frontend server (from the root directory):
   ```
   npm run dev
   ```

3. Access the application at: http://localhost:5173

## Troubleshooting

If you encounter issues with nodemon:

1. Install nodemon globally:
   ```
   npm install -g nodemon
   ```

2. Or run the server without nodemon:
   ```
   npm start
   ```