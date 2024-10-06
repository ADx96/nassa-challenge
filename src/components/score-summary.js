import React from 'react';
import SummaryCard from './summary-card';
import { Box, Container } from '@mui/material';
import ScoreBox from './score-box';

const ScoreSummary = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <ScoreBox />
        <SummaryCard />
        <SummaryCard />
      </Container>
    </Box>
  );
};

export default ScoreSummary;
