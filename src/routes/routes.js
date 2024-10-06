import { createBrowserRouter } from 'react-router-dom';
import StarterPage from '../pages/starter-page';
import Questions from '../pages/questions';
import Nasa404 from '../pages/404';
import TopBar from '../components/appbar';
import Dashboard from '../pages/dashboard';
import SessionPage from '../pages/session-page';
import Lobby from '../pages/lobby';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <TopBar />
        <StarterPage />
      </>
    ),
  },
  {
    path: '/StartSession',
    element: (
      <>
        <TopBar />
        <SessionPage />
      </>
    ),
  },
  {
    path: '/lobby',
    element: (
      <>
        <TopBar />
        <Lobby />
      </>
    ),
  },
  {
    path: '/Questions',
    element: (
      <>
        <TopBar />
        <Questions />
      </>
    ),
  },
  {
    path: '/Dashboard',
    element: (
      <>
        <TopBar />
        <Dashboard />
      </>
    ),
  },
  {
    path: '*',
    element: <Nasa404 />,
  },
]);
