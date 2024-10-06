import { CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import SessionSteps from '../components/session-steps';
import GameSessionSelection from '../components/session-selection';

const SessionPage = () => {
  const [step, setStep] = useState('');
  const [type, setType] = useState('');

  return (
    <div>
      <CssBaseline />
      {step === '' ? (
        <GameSessionSelection setStep={setStep} setType={setType} />
      ) : (
        <SessionSteps step={step} type={type} setStep={setStep} />
      )}
    </div>
  );
};

export default SessionPage;
