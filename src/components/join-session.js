import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../lotties/loading.json';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { joinGame } from '../api/game';

const JoinSession = () => {
  const [sessionId, setSessionId] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { mutate } = useMutation(() => joinGame(sessionId), {
    onSuccess: (data) => {
      sessionStorage.setItem('startSession', data);
    },
    onError: (error) => {
      console.error('Error creating game:', error);
    },
  });

  const handleJoinSession = () => {
    if (sessionId) {
      setLoading(true);
      mutate();
      setTimeout(() => {
        setLoading(false);
        navigate('/lobby');
      }, 3000);
    } else {
      alert('Please enter a session ID.');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundColor: '#121212',
        color: '#ffffff',
        padding: 2,
      }}
    >
      <Typography variant="h4" mb={2}>
        Join Session
      </Typography>
      {!loading ? (
        <>
          <TextField
            variant="outlined"
            label="Session ID"
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
            InputLabelProps={{
              sx: { color: '#ffffff' }, // Set the label color to white
            }}
            InputProps={{
              sx: {
                color: '#ffffff', // Set the input text color to white
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff', // Set border color to white when focused
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff', // Set border color to white on hover
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff', // Set border color to white when focused
                },
              },
            }}
            sx={{
              backgroundColor: '#1d1f27', // Change background color to a darker shade
              borderRadius: 2,
              marginBottom: 2,
              width: '300px', // Fixed width for the input
            }}
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleJoinSession}
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
              Join Session
            </Button>
          </motion.div>
        </>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="200px"
        >
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{ width: 100, height: 100 }}
          />
          <Typography variant="h6" mt={2} sx={{ color: '#ffffff' }}>
            Joining, please wait...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default JoinSession;
