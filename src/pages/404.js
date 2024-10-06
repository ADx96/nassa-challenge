import React from 'react';
import { Box, Typography, Button, CssBaseline } from '@mui/material';
import Lottie from 'lottie-react';
import nasaAnimation from '../lotties/nasa-404.json';
import { motion } from 'framer-motion';
import stars from '../assets/bg.jpg';
import { useNavigate } from 'react-router-dom';

const Nasa404 = () => {
  const navigate = useNavigate();

  const starsAnimation = {
    hidden: { opacity: 0.5, scale: 0.8 },
    visible: {
      opacity: [0.5, 1],
      scale: [0.8, 1],
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  const spaceBackgroundStyle = {
    position: 'relative',
    backgroundImage: `url(${stars})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  return (
    <>
      <CssBaseline />

      <Box style={spaceBackgroundStyle} display="flex" textAlign="center" p={4}>
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            height: '20px',
            width: '20px',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
          initial="hidden"
          animate="visible"
          variants={starsAnimation}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            right: '10%',
            height: '10px',
            width: '10px',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
          initial="hidden"
          animate="visible"
          variants={starsAnimation}
        />

        <Box width={300} height={300} p={4}>
          <Lottie animationData={nasaAnimation} loop={true} />
        </Box>
        <Typography variant="h3" color="white" gutterBottom>
          Houston, we have a problem!
        </Typography>
        <Typography variant="h6" color="white" gutterBottom>
          The page you're looking for doesn't exist. Looks like you've drifted
          off into space.
        </Typography>
        <Button
          color="primary"
          onClick={() => navigate('/')}
          variant="contained"
          sx={{ mt: 3 }}
        >
          Go Back Home
        </Button>
      </Box>
    </>
  );
};

export default Nasa404;
