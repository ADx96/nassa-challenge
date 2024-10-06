import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars'; // Import a points icon

const AnimatedPointsCard = ({ points }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        marginBottom: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Animation for hover effect
        '&:hover': {
          transform: 'scale(1.05)', // Slightly scale on hover
          boxShadow: 5, // Increase shadow on hover
        },
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', padding: 3 }}>
        <StarsIcon sx={{ fontSize: 40, marginRight: 2, color: '#1976d2' }} />{' '}
        {/* Points icon in blue */}
        <Box>
          <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
            Last Session Earned Points
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            {points}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnimatedPointsCard;
