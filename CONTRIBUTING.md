# Contributing

Thank you for contributing to the Car Companion project! This document explains the basic workflow for adding features and improving the scaffold.

## Getting started

1. Fork the repository or work in a feature branch.
2. Install dependencies for both parts of the project.
   - `backend/`: `npm install`
   - `mobile/`: `npm install`
3. Run the backend and mobile app locally.

## Development workflow

- Backend changes should be made under `backend/src/`.
- Mobile changes should be made under `mobile/`.
- Keep TypeScript types in sync between backend and mobile if possible.
- Add UI screens for new features in `mobile/screens/`.

## Testing

- Verify the backend route behavior manually with HTTP requests.
- Run the mobile app in Expo and test navigation flows.

## Suggestions

- Add a real VIN decoding integration.
- Replace mock auth with JWT or OAuth.
- Persist backend data using a database like SQLite.
- Add services and reminders for scheduled maintenance.
