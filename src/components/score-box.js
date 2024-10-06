import React from 'react';
import { Box, Typography } from '@mui/material';

const ScoreBox = ({ score }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        backgroundColor: '#1f1f1f',
        boxShadow: 3,
        textAlign: 'center',
        color: 'white',
        marginBottom: 3, // Adds spacing below the box
      }}
    >
      <Typography variant="h5">Your Score: {score}</Typography>
      <Typography variant="h6">Username: {user?.username}</Typography>
    </Box>
  );
};

export default ScoreBox;
