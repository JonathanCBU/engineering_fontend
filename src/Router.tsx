import AppLayout from '@/AppLayout';
import CareerPage from '@/pages/Career/CareerPage';
import HomePage from '@/pages/Home/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    ],
  },
]);

const Router = (): React.JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Router;
