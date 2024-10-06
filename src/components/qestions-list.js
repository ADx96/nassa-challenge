import React from 'react';
import QuestionAnswerCard from './glossy-card';
import { Box, Container, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getQuestions } from '../api/game';
import { useQuery } from 'react-query';

const QuestionsList = ({ handleNext }) => {
  const sessionId = sessionStorage.getItem('startSession');

  const { data, isLoading } = useQuery(
    ['Questions'],

    () => getQuestions(sessionId)
  );

  if (isLoading) {
    return <h1>loading</h1>;
  }
  return (
    <Container
      alignItems="center"
      display="flex"
      flexDirection={'column'}
      justifyContent={'center'}
      width={'100%'}
    >
      <QuestionAnswerCard question={data} answer={data} />

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
