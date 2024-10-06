import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  CardActions,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { getSessionPlayers, startGame } from '../api/game';

const Lobby = () => {
  const currentUserId = 1;
  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem('user'));
  const isAdmin = user?.isHost;

  const sessionId = sessionStorage.getItem('startSession');
  const {
    data: players,
    error,
    isLoading,
  } = useQuery(
    ['sessionPlayers', sessionId],

    () => getSessionPlayers(sessionId),
    {
      refetchInterval: 3000, // Refetch every 3 seconds
    }
  );

  const { mutate, data } = useMutation(() => startGame(sessionId), {
    onSuccess: (data) => {},
    onError: (error) => {
      console.error('Error creating game:', error);
    },
  });

  console.log(players);

  // useEffect(() => {
  //   if (players.length >= 7) {
  //     setTimeout(() => {
  //       navigate('/lobby');
  //     }, 3000);
  //   }
  // }, [navigate, players]);

  const handleStart = () => {
    mutate();
    setTimeout(() => {
      navigate('/lobby');
    }, 3000);
  };

  if (isLoading) return <CircularProgress />; // Show loading indicator

  return (
    <>
      <CssBaseline />
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
        <Typography variant="h4" mb={4}>
          Lobby
        </Typography>
        <Typography variant="h6" mb={2}>
          SessionId:{sessionId}
        </Typography>
        <Typography variant="h6" mb={2}>
          Total Players: {players.length}/10
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {players.map((player) => (
            <Card
              key={player.id}
              sx={{
                minWidth: 200,
                margin: 2,
                backgroundColor:
                  player.id === currentUserId ? '#e0f7fa' : '#ffffff', // Different background for current user
                borderRadius: '16px',
                boxShadow: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Avatar
                  alt={player.name}
                  src={player.avatar}
                  sx={{
                    width: 64,
                    height: 64,
                    marginBottom: 2,
                    border: '2px solid #007bff', // Adding a border for better visibility
                  }}
                />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {player}
                  {player.id === currentUserId && ' (You)'}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Level: {player.level}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#0056b3',
                    },
                  }}
                >
                  View Profile
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
        <Box display="flex" flexDirection="row" gap={1}>
          {isAdmin && (
            <Button
              onClick={handleStart}
              variant="contained"
              sx={{
                marginTop: 4,
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#0056b3',
                },
              }}
            >
              Start
            </Button>
          )}
          <Button
            variant="contained"
            sx={{
              marginTop: 4,
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
            onClick={() => {
              navigate('/Dashboard');
            }}
          >
            Leave Session
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Lobby;
