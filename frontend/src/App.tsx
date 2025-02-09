import React from 'react';
import SubjectSelector from './components/SubjectSelector';
import TestSelector from './components/TestSelector';
import ScoreEntryForm from './components/ScoreEntryForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Student Scores Entry</h1>
      <SubjectSelector />
      <TestSelector />
      <ScoreEntryForm />
    </div>
  );
};

export default App;