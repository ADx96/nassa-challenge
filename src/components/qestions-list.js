import React, { useState } from 'react';
import QuestionAnswerCard from './glossy-card';
import { Box, Container, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
        justifyContent="end"
        alignItems="end"
        marginTop="20px"
      >
        <IconButton
          onClick={handleSubmit}
          style={{ backgroundColor: '#1A76D1' }}
          color="blue"
        >
          <ArrowForwardIcon style={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default QuestionsList;
