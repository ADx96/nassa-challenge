import React from 'react';
import StartSession from './start-session';
import JoinSession from './join-session';
import CategorySelection from './catagories';

const SessionSteps = ({ step, type, setStep }) => {
  return (
    <div>
      {step === 'CategorySelection' && (
        <CategorySelection setStep={setStep} type={type} />
      )}
      {step === 'startSession' && <StartSession />}
      {step === 'joinSession' && <JoinSession />}
    </div>
  );
};

export default SessionSteps;
