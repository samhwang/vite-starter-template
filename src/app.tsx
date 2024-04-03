import { RouterProvider } from '@tanstack/react-router';
import { appRouter } from './router';

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
