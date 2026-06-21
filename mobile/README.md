# Mobile

Expo React Native mobile app for the Car Companion project.

## Setup

1. Open a terminal in `mobile/`.
2. Install packages:
   ```bash
   npm install
   ```
3. Start Expo:
   ```bash
   npm start
   ```

## Notes

- The app currently calls the backend at `http://localhost:4000`.
- If the backend runs on a different host or device, update `mobile/services/api.ts`.
- The current UI includes login, VIN entry, vehicle summary, and vehicle state entry.
