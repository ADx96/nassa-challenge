import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import QuestionsList from './qestions-list';
import ScoreSummary from './score-summary';

const steps = ['1', '2', '3', '4', '5'];

export default function CustomizedSteppers() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '100%',
        padding: '0 8px',
        backgroundColor: '#121212',
        minHeight: '100vh',
      }}
      spacing={4}
    >
      {isCompleted ? (
        <ScoreSummary />
      ) : (
        <QuestionsList setIsCompleted={setIsCompleted} steps={steps} />
      )}
    </Stack>
  );
}
