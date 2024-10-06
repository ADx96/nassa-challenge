import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import QuestionsList from './qestions-list';
import ScoreSummary from './score-summary';

const steps = ['1', '2', '3', '4', '5'];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    borderRadius: 1,
    backgroundColor: '#eaeaf0', // Default grey background for all steps
    transition: 'background-color 2s ease', // Transition for color change
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundImage:
      'linear-gradient(95deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 50%, rgb(138, 35, 135) 100%)',
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundImage:
      'linear-gradient(95deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 50%, rgb(138, 35, 135) 100%)',
  },
}));

export default function CustomizedSteppers() {
  const theme = useTheme();
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => {
      const nextStep = prevStep < steps.length - 1 ? prevStep + 1 : prevStep;

      if (nextStep === steps.length - 1) {
        setIsCompleted(true);
      }

      return nextStep;
    });
  };

  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: '100%',
        padding: '0 8px',
        backgroundColor: '#121212', // Dark background color
        minHeight: '100vh', // Ensures the background covers the full height
      }}
      spacing={4}
    >
      <Stepper
        style={{ marginTop: '15px' }}
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        sx={{
          width: '100%',
          [theme.breakpoints.down('sm')]: {
            '.MuiStepLabel-label': {
              fontSize: '0.75rem', // Smaller font size for mobile
            },
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {isCompleted ? (
        <ScoreSummary />
      ) : (
        <QuestionsList
          handleNext={handleNext}
          steps={steps}
          activeStep={activeStep}
        />
      )}
    </Stack>
  );
}
