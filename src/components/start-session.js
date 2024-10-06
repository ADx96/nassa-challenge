import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../lotties/loading.json';
import { useNavigate } from 'react-router-dom';
import { createGame, joinGame } from '../api/game';
import { QueryClient, useMutation } from 'react-query';

const StartSession = () => {
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const { mutate: mutateGame } = useMutation((id) => joinGame(id), {
    onSuccess: () => {
      QueryClient.invalidateQueries('gameSessions');
    },
    onError: (error) => {
      console.error('Error creating game:', error);
    },
  });

  const { mutate } = useMutation(() => createGame(password), {
    onSuccess: (data) => {
      mutateGame(data);
      sessionStorage.setItem('startSession', data);
      QueryClient.invalidateQueries('gameSessions');
    },
    onError: (error) => {
      console.error('Error creating game:', error);
    },
  });
  const navigate = useNavigate();

  const handleStartSession = () => {
    if (password) {
      mutate();
      setLoading(true);
      sessionStorage.setItem('secret', password);
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
        Create Session
      </Typography>
      {!loading ? (
        <>
          <TextField
            variant="outlined"
            label="Session Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleStartSession}
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
              Create Session
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
            Creating, please wait...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default StartSession;
