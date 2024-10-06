import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HistoryIcon from '@mui/icons-material/History';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';

const FixedBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleNavigation = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/recents');
        break;
      case 1:
        navigate('/play');
        break;
      case 2:
        navigate('/dashboard');
        break;
      default:
        break;
    }
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      justifyItems={'center'}
      zIndex={1}
    >
      <CssBaseline />
      <Paper
        sx={{
          position: 'fixed',
          borderRadius: 16,
          bottom: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          zIndex: 3,
          bgcolor: '#1d1f27',
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => handleNavigation(newValue)}
          sx={{
            backgroundColor: '#111111',
            borderRadius: 24,
            '& .Mui-selected': {
              color: '#ffea00', // Vibrant yellow for the selected item
            },
          }}
        >
          {/* Animated Recents Button */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <BottomNavigationAction
              label="Recents"
              icon={<HistoryIcon />}
              value={0}
              sx={{
                color: '#ffffff',
              }}
            />
          </motion.div>

          {/* Animated Play Button (Scales & Bounces) */}
          <motion.div
            onClick={() => navigate('/StartSession')}
            initial={{ scale: 1 }}
            animate={{ scale: value === 1 ? 1.4 : 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.6 }}
            style={{ textAlign: 'center' }} // Centering the label
          >
            <BottomNavigationAction
              style={{ bottom: 16 }}
              label="Play"
              icon={
                <motion.div
                  animate={{ scale: value === 1 ? 1.5 : 1 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    marginBottom: '20px',
                    backgroundColor: value === 1 ? '#ffea00' : '#444444',
                    width: 64,
                    height: 64,
                    color: '#ffffff', // Darker icon color on selection
                  }}
                >
                  <SportsEsportsIcon fontSize="large" />
                </motion.div>
              }
              value={1}
              sx={{
                color: '#ffffff',
              }}
            />
          </motion.div>

          <motion.div
            onClick={() => navigate('/Dashboard')}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <BottomNavigationAction
              label="Dashboard"
              icon={<DashboardIcon />}
              value={2}
              sx={{
                color: '#ffffff',
              }}
            />
          </motion.div>
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default FixedBottomNavigation;
