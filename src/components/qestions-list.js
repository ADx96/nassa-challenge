import React, { useState } from 'react';
import QuestionAnswerCard from './glossy-card';
import { Box, Button, Container } from '@mui/material';
import { getQuestions, SubmitAnswers } from '../api/game';
import { useMutation, useQuery } from 'react-query';

const QuestionsList = ({ setIsCompleted }) => {
  const [answers, setAnswers] = useState([]);

  const sessionId = sessionStorage.getItem('startSession');

  const { mutate } = useMutation(() => SubmitAnswers(sessionId, answers), {
    onSuccess: (data) => {},
    onError: (error) => {
      console.error('Error submitting answers:', error);
    },
  });

  const { data: questions, isLoading } = useQuery(
    ['Questions', sessionId],
    () => getQuestions(sessionId)
  );

  const handleSubmit = () => {
    mutate();
    setIsCompleted(true);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      {questions.map((question, index) => (
        <div style={{ marginTop: 20 }} key={question.Id}>
          <QuestionAnswerCard
            setAnswers={setAnswers}
            questionData={question}
            index={index}
          />
        </div>
      ))}

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
        marginBottom="40px"
      >
        <Button
          fullWidth
          onClick={handleSubmit}
          style={{ backgroundColor: '#1A76D1' }}
          color="blue"
          sx={{
            marginTop: 4,
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default QuestionsList;
