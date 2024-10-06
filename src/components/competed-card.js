import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Stack,
  Fade,
} from '@mui/material';
import ProgressBar from '@mui/material/LinearProgress'; // Import LinearProgress for progress display

const CompetedCard = ({ competitors }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        width: '100%', // Set a max width for the card
        margin: 'auto',
        marginTop: 2,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom right, #ffffff, #e6e6e6)', // Lighter glossy effect
      }}
    >
      {/* Add a glossy overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'rgba(255, 255, 255, 0.4)', // Light overlay for gloss
          borderRadius: '50%',
          transform: 'rotate(30deg)',
          filter: 'blur(60px)', // Increase blur for a softer effect
          zIndex: 1,
        }}
      />
      <CardContent sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h5" component="div" gutterBottom>
          Progress Against Competitors
        </Typography>
        {competitors.map((competitor, index) => (
          <Fade key={competitor.id} in={true} timeout={500}>
            <Box sx={{ marginBottom: 2 }}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 2,
                  borderRadius: 5,
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: 'transparent', // Make inner card transparent to show overlay
                  boxShadow: 'none', // Remove shadow from inner card
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={competitor.name} src={competitor.avatar} />
                  <Stack sx={{ marginLeft: 2 }}>
                    <Typography variant="body1" fontWeight={500}>
                      {competitor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Progress: {competitor.progress}%
                    </Typography>
                  </Stack>
                </Box>
                <Box sx={{ width: '60%', marginLeft: 'auto' }}>
                  <ProgressBar
                    variant="determinate"
                    value={competitor.progress}
                    sx={{
                      borderRadius: 5,
                      height: 10,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                    }}
                  />
                </Box>
              </Card>
            </Box>
          </Fade>
        ))}
      </CardContent>
    </Card>
  );
};

export default CompetedCard;
