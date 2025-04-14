import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AppLayout from './AppLayout';
import CareerPage from './pages/Career/CareerPage';
import TimerPage from './pages/TimerPage/TimerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <div>Oops! Something went wrong.</div>,
      },
      {
        path: 'home',
        element: <HomePage />,
        errorElement: <div>Oops! Something went wrong.</div>,
      },
      {
        path: 'career',
        element: <CareerPage />,
        errorElement: <div>Oops! Something went wrong.</div>,
      },
      {
        path: 'timer',
        element: <TimerPage />,
        errorElement: <div>Oops! Something went wrong.</div>,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
