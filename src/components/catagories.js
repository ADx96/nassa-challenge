import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

// Define the age groups with square images
const ageGroups = [
  {
    label: '0-5',
    value: '0-5',
    img: 'https://images.unsplash.com/photo-1502318217862-aa4e294ba657?q=80&w=2143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: '6-10',
    value: '6-10',
    img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  },
  {
    label: '11-17',
    value: '11-17',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  },
  {
    label: '18-30',
    value: '16-30',
    img: 'https://plus.unsplash.com/premium_photo-1677511580659-f5fa0675a547?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Styled component for the card with an image background
const StyledCard = styled(Box)(({ theme, img }) => ({
  borderRadius: '16px', // Rounded corners
  overflow: 'hidden',
  backgroundImage: `url(${img})`, // Set background image
  backgroundSize: 'cover', // Cover the whole box
  backgroundPosition: 'center', // Center the image
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%', // Full width of the grid item
  height: '250px', // Fixed height for square appearance
  position: 'relative', // Relative positioning for button
  '&:hover': {
    transform: 'scale(1.05)', // Scale up on hover
    boxShadow: theme.shadows[8], // Add shadow on hover
  },
}));

const CategorySelection = ({ type, setStep }) => {
  const handleSelectCategory = (category) => {
    if (type === 'Join') {
      setStep('joinSession');
    } else {
      setStep('startSession');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100vh"
      sx={{
        backgroundColor: '#000000', // Set background to black
        color: '#ffffff',
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        paddingBottom={4}
        sx={{ marginTop: 4 }}
      >
        Select Your Age Group
      </Typography>
      <Grid
        container
        spacing={4} // Space between cards
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: '80%',
          padding: 2,
          backdropFilter: 'blur(4px)', // Optional blur for readability
        }}
      >
        {ageGroups.map((group) => (
          <Grid item xs={12} sm={6} md={6} key={group.value}>
            <StyledCard img={group.img}>
              <Button
                onClick={() => handleSelectCategory(group.value)}
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for button
                  color: '#ffffff',
                  width: '100%',
                  height: '100%',
                  borderRadius: '0', // Full width button with square corners
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  position: 'absolute', // Position button absolutely
                  top: 0, // Align to top
                  left: 0, // Align to left
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighten on hover
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    top: 10, // Align title to the top
                    color: '#ffffff', // White text color for visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                    padding: 1,
                    borderRadius: 1,
                    textAlign: 'center',
                    width: '40%',
                  }}
                >
                  <Typography variant="h6">Age Group:{group.label}</Typography>
                </Typography>
              </Button>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySelection;
