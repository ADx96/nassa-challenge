import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { Divider, IconButton } from '@mui/material';
import TopicDrawer from './drawer';

const SummaryCard = () => {
  const isCorrect = true;
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Question 1
        </Typography>
        <Typography variant="h5" paddingBottom={1} component="div">
          Whats
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          Correct Answer:
        </Typography>
        <Typography marginBottom="10px" variant="body2">
          well meaning and kindly.
        </Typography>
        <Divider />
        <Typography marginTop="10px" sx={{ color: 'text.secondary', mb: 1.5 }}>
          Your Answer:
        </Typography>
        <Typography variant="body2">well meaning and kindly.</Typography>
      </CardContent>
      <TopicDrawer />
      <Box display="flex" alignItems="end" justifyContent="end">
        <CardActions>
          <IconButton
            style={{ backgroundColor: isCorrect ? '#00ad1c' : 'fc0000' }}
            color="blue"
          >
            {isCorrect ? (
              <CheckIcon style={{ color: 'white' }} />
            ) : (
              <ClearIcon style={{ color: 'white' }} />
            )}
          </IconButton>
        </CardActions>
      </Box>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275, margin: 2 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default SummaryCard;
