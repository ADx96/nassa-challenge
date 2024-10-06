import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />{' '}
    </ThemeProvider>
  );
};
export default App;
