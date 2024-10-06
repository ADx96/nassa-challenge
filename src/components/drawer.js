import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function TopicDrawer({ summary }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box padding={3} role="presentation">
      <Box display="flex" justifyContent="end" role="presentation">
        <CloseIcon
          onClick={toggleDrawer(false)}
          style={{ color: 'black', textAlign: 'right' }}
        />
      </Box>
      <Typography variant="body1" gutterBottom sx={{ color: 'text.primary' }}>
        Question 1
      </Typography>
    </Box>
  );

  return (
    <div>
      <div style={{ padding: 10 }}>
        <Button onClick={toggleDrawer(true)}>Read More</Button>
      </div>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
