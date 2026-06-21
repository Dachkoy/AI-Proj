# AI-Proj

A car companion app scaffold with a TypeScript Express backend and an Expo React Native mobile client.

## Project structure

- `backend/` — TypeScript Express API for auth, VIN decoding, and vehicle state storage.
- `mobile/` — Expo React Native app for login, VIN entry, and vehicle state entry.

## Setup

### Backend

1. Open a terminal in `backend/`.
2. Install packages: `npm install`
3. Start the server: `npm start`
4. The API will run on `http://localhost:4000`.

### Mobile

1. Open a terminal in `mobile/`.
2. Install packages: `npm install`
3. Start Expo: `npm start`
4. Use the Expo app, simulator, or web to load the app.

## Notes

- The backend currently uses in-memory storage and a mock VIN decoder.
- The mobile app uses `http://localhost:4000` for API calls; adjust `mobile/services/api.ts` if your backend runs on a different host.
- If `npm` is unavailable, install Node.js or use a compatible package manager.
