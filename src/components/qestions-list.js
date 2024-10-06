import React from 'react';
import QuestionAnswerCard from './glossy-card';
import { Box, Container, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// List of questions
const questions = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 2,
    question: 'What is a component in React?',
    answer: 'A component in React is a reusable piece of the UI.',
  },
  {
    id: 3,
    question: 'Explain state and props in React.',
    answer:
      'State is a data structure that holds information that may change over time, while props are inputs passed to a component to configure it.',
  },
  {
    id: 4,
    question: 'What are hooks in React?',
    answer:
      'Hooks are special functions that allow you to use state and other React features without writing a class.',
  },
  {
    id: 5,
    question: 'What is JSX?',
    answer:
      'JSX is a syntax extension that allows mixing HTML with JavaScript in React.',
  },
];

const QuestionsList = ({ activeStep, handleNext, steps }) => {
  const currentQuestion = questions[activeStep]; // Get the current question based on activeStep
  const question = currentQuestion?.question;
  const answer = currentQuestion?.answer;
  return (
    <Container
      alignItems="center"
      display="flex"
      flexDirection={'column'}
      justifyContent={'center'}
      width={'100%'}
    >
      <QuestionAnswerCard question={question} answer={answer} />

      <Box
        display="flex"
        justifyContent="end"
        alignItems="end"
        marginTop={'20px'}
      >
        <IconButton
          style={{ backgroundColor: '#1A76D1' }}
          color="blue"
          onClick={handleNext}
        >
          <ArrowForwardIcon style={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default QuestionsList;
