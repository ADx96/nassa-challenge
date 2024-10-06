import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from '@mui/material';

const LevelCard = ({ title, level, percentageToNextLevel }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        boxShadow: 1, // Optional: adds shadow to the card
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Animation for hover effect
        '&:hover': {
          transform: 'scale(1.05)', // Slightly scale on hover
          boxShadow: 5, // Increase shadow on hover
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" fontWeight={600} color="text.primary">
          Level: {level}
        </Typography>
        <Box sx={{ marginTop: 1 }}>
          <Typography
            paddingBottom={1}
            fontWeight={600}
            variant="body2"
            color="text.primary"
          >
            Next Level: {percentageToNextLevel}%
          </Typography>
          <LinearProgress
            sx={{
              height: 10, // Adjust the height if needed
              borderRadius: 5, // Set the border radius for rounded edges
              '& .MuiLinearProgress-bar': {
                borderRadius: 5, // Ensure the bar also has rounded edges
              },
            }}
            variant="determinate"
            value={percentageToNextLevel}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default LevelCard;
