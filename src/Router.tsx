import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import AppLayout from './AppLayout';
import CareerPage from './pages/CareerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
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

export function Router() {
  return <RouterProvider router={router} />;
}
