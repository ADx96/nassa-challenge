import React, { useState } from 'react';
import { Box, Button, CssBaseline, TextField, Typography } from '@mui/material';
import StarterBg from '../assets/bg.jpg';
import Lottie from 'lottie-react';
import nasaLogo from '../lotties/nasa.json';
import Loading from '../lotties/loading.json';
import { useNavigate } from 'react-router-dom';

const StarterPage = () => {
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  const [username, setUsername] = useState(''); // Store input value
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (username.trim()) {
      setIsSubmitting(true);

      const user = {
        username,
        isHost: username === 'AliNawab' || username === 'Abduljawad',
      };

      sessionStorage.setItem('user', JSON.stringify(user));

      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/dashboard');
      }, 2000);
    } else {
      alert('Please enter a valid username');
    }
  };

  const GetActionButton = () => {
    if (!start) {
      return (
        <Button
          onClick={() => setStart(true)}
          sx={{
            padding: '10px 22px',
            fontSize: '1.2rem',
            borderRadius: '10px',
          }}
          variant="contained"
          color="primary"
        >
          Start Now
        </Button>
      );
    } else {
      return (
        <Box
          component="form"
          noValidate
          autoComplete="off"
          width={'400px'}
          sx={{ padding: 3, backgroundColor: '#121212', borderRadius: 2 }}
        >
          <Typography
            marginBottom="30px"
            color="white"
            textAlign="center"
            variant="h5"
          >
            Create your account to start
          </Typography>
          <div class="form-control">
            <TextField
              autoFocus
              fullWidth
              value={username}
              onChange={(e) => setUsername(e?.target?.value)}
              id="outlined-basic"
              label="Enter Your User Name"
              variant="outlined"
              sx={{
                backgroundColor: '#1f1f1f',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#ffffff',
                },
                '& .MuiInputBase-input': {
                  color: '#ffffff',
                },
              }}
            />
            <Box marginTop={5}>
              <Button
                fullWidth
                onClick={handleSubmit}
                sx={{
                  padding: '10px 22px',
                  fontSize: '1.2rem',
                  borderRadius: '10px',
                  backgroundColor: '#0A3D91',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#11469b',
                  },
                }}
                variant="contained"
              >
                Create
              </Button>
            </Box>
          </div>
        </Box>
      );
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${StarterBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box width={250} height={250} p={1}>
          <Lottie animationData={nasaLogo} loop={true} />
        </Box>
        <Typography
          marginBottom="30px"
          color="white"
          textAlign="center"
          variant="h2"
        >
          Globe Protocol Gamification
        </Typography>
        {!isSubmitting ? (
          <GetActionButton />
        ) : (
          <Box width={200} height={200} p={1}>
            <Lottie animationData={Loading} loop={true} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default StarterPage;
