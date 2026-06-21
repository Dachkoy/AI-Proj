# Backend

TypeScript Express backend for the Car Companion app.

## Setup

1. Open a terminal in `backend/`.
2. Install packages:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

The API will run on `http://localhost:4000`.

## Notes

- This backend uses in-memory arrays for storage.
- VIN decoding is mocked in `src/services/vinDecoder.ts`.
- Update `src/services/vinDecoder.ts` to integrate a real VIN service.
