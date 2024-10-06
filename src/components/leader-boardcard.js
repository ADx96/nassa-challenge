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
import StarIcon from '@mui/icons-material/Star';

const LeaderBoardCard = ({ users, title }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        width: '100%', // Set a max width for the card
        margin: 'auto',
        marginTop: 2,
        position: 'relative',
        overflow: 'hidden',
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
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      <CardContent sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        {users.map((user, index) => (
          <Fade key={user.id} in={true} timeout={500}>
            <Box>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 2,
                  padding: 2,
                  borderRadius: 5,
                  position: 'relative',
                  zIndex: 2,
                  justifyContent: 'space-between', // Space out the contents
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={user.title} src={user.avatar} />
                  <Stack sx={{ marginLeft: 2 }}>
                    <Typography variant="body1" fontWeight={500}>
                      {user.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Points: {user.points}
                    </Typography>
                  </Stack>
                </Box>
                {index < 3 && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: 'auto', // Push to the right
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'gold',
                        borderRadius: '50%',
                        width: 40, // Adjust width for larger star
                        height: 40, // Adjust height for larger star
                        justifyContent: 'center',
                        marginRight: 0.5,
                      }}
                    >
                      <StarIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography variant="body1" sx={{ marginLeft: 0.5 }}>
                      {index + 1}
                    </Typography>
                  </Box>
                )}
              </Card>
            </Box>
          </Fade>
        ))}
      </CardContent>
    </Card>
  );
};

export default LeaderBoardCard;
