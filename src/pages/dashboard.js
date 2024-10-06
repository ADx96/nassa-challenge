import { Avatar, Box, CssBaseline, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import LevelCard from '../components/level-card';
import LeaderBoardCard from '../components/leader-boardcard';
import CompetedCard from '../components/competed-card';
import AnimatedPointsCard from '../components/earned-points';
import FixedBottomNavigation from '../components/bottom-navigate';

const Dashboard = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const competitors = [
    {
      id: 1,
      name: 'Alice',
      avatar: 'https://i.pravatar.cc/150?img=1',
      progress: 80,
    },
    {
      id: 2,
      name: 'Bob',
      avatar: 'https://i.pravatar.cc/150?img=2',
      progress: 70,
    },
    {
      id: 3,
      name: 'Charlie',
      avatar: 'https://i.pravatar.cc/150?img=3',
      progress: 90,
    },
  ];

  const users = [
    {
      id: 1,
      title: 'User One',
      points: 150,
      avatar: 'https://example.com/avatar1.jpg',
    },
    {
      id: 2,
      title: 'User Two',
      points: 120,
      avatar: 'https://example.com/avatar2.jpg',
    },
    {
      id: 3,
      title: 'User Three',
      points: 100,
      avatar: 'https://example.com/avatar3.jpg',
    },
    {
      id: 4,
      title: 'User Four',
      points: 80,
      avatar: 'https://example.com/avatar4.jpg',
    },
    {
      id: 5,
      title: 'User Five',
      points: 60,
      avatar: 'https://example.com/avatar5.jpg',
    },
  ];

  return (
    <div>
      <CssBaseline />
      <Box style={{ marginTop: 30 }} padding={2} sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            marginLeft: { xs: 2, sm: 4, md: 27 }, // Adjust margin for different screen sizes
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            marginBottom: 4,
          }}
        >
          <Avatar
            alt={'username'}
            src={'avatarUrl'}
            sx={{ width: 56, height: 56, marginRight: 2 }} // Adjust size and margin as needed
          />
          <Typography variant="h5" component="h1">
            Hello, {user?.username}!
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <LevelCard
              title={'Your Score'}
              level={1}
              percentageToNextLevel={10}
              users={users}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <AnimatedPointsCard points={0} />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <LeaderBoardCard users={users} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CompetedCard competitors={competitors} />
          </Grid>
        </Grid>
      </Box>
      <FixedBottomNavigation />
    </div>
  );
};

export default Dashboard;
