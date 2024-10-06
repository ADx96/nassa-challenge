import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import GroupIcon from '@mui/icons-material/Group';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const GameSessionSelection = ({ setStep, setType }) => {
  const handleJoinSession = () => {
    setStep('CategorySelection');
    setType('Join');
  };

  const handleCreateSession = () => {
    setStep('CategorySelection');
    setType('Create');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#121212', color: '#ffffff', padding: 2 }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: { xs: '100%', sm: '80%', md: '60%' },
          padding: 4,
        }}
      >
        <Grid item xs={12} sm={6}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Button
              onClick={handleJoinSession}
              sx={{
                backgroundColor: '#007bff',
                color: '#fff',
                width: '100%',
                height: { xs: 160, sm: 180, md: 200 },
                borderRadius: '20px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: { xs: '1rem', sm: '1.25rem' },
                '&:hover': {
                  backgroundColor: '#0056b3',
                },
              }}
            >
              <GroupIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 } }} />
              <Typography variant="h6" mt={2}>
                Join Session
              </Typography>
            </Button>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Button
              onClick={handleCreateSession}
              sx={{
                backgroundColor: '#28a745',
                color: '#fff',
                width: '100%',
                height: { xs: 160, sm: 180, md: 200 },
                borderRadius: '20px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: { xs: '1rem', sm: '1.25rem' },
                '&:hover': {
                  backgroundColor: '#218838',
                },
              }}
            >
              <AddCircleIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 } }} />
              <Typography variant="h6" mt={2}>
                Create Session
              </Typography>
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameSessionSelection;
