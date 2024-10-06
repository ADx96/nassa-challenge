import React from 'react';
import SummaryCard from './summary-card';
import { Box, Button, Container } from '@mui/material';
import ScoreBox from './score-box';
import { useQuery } from 'react-query';
import { endGame, getResults } from '../api/game';
import { useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const sessionId = sessionStorage.getItem('startSession');
  const user = JSON.parse(sessionStorage.getItem('user'));

  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    ['result'],
    () => getResults(sessionId),
    {
      refetchInterval: 3000,
    }
  );
  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  const filteredScores = data.Scores.filter(
    (score) => score.Username === user.username
  );

  const handleEndSession = async () => {
    endGame(sessionId);
    navigate('/dashboard');
  };

  return (
    <Box>
      <Container maxWidth="sm">
        <ScoreBox score={filteredScores[0]?.Score || 0} />
        {data.Questions.map((question, index) => (
          <SummaryCard
            key={question.Id}
            question={question}
            correctAnswer={question.Correct}
            userAnswer={data.Answers[index]} // Assuming the Answers array is in the same order as Questions
          />
        ))}
      </Container>
      <Box display="flex" justifyContent="center" marginBottom="10px">
        <Button
          onClick={handleEndSession}
          variant="contained"
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            width: '300px', // Fixed width for the button
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          End session
        </Button>
      </Box>
    </Box>
  );
};

export default ScoreSummary;
