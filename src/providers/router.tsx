import { createBrowserRouter, RouterProvider as RRProvider } from 'react-router-dom';
import IndexPage from '../pages/index-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
]);

export default function RouterProvider() {
  return <RRProvider router={router} />;
}
