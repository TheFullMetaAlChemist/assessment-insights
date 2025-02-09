# Student Scores Application - Frontend

This is the frontend part of the Student Scores Application. It allows users to select subjects and tests before entering student scores.

## Project Structure

- `src/`: Contains the source code for the frontend application.
  - `components/`: Contains React components for the application.
    - `SubjectSelector.tsx`: Component for selecting a subject.
    - `TestSelector.tsx`: Component for selecting a test based on the chosen subject.
    - `ScoreEntryForm.tsx`: Component for entering scores.
  - `App.tsx`: Main application component that renders the other components.
  - `index.tsx`: Entry point for the React application.

## Setup Instructions

1. **Install Dependencies**: Navigate to the `frontend` directory and run:
   ```
   npm install
   ```

2. **Start the Application**: After installing dependencies, you can start the application with:
   ```
   npm start
   ```

3. **Access the Application**: Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Use the Subject Selector to choose a subject.
- After selecting a subject, use the Test Selector to choose a test.
- Fill in the Score Entry Form with the relevant scores and submit.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.