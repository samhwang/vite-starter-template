import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RouterProvider from './providers/router';

async function renderRoot() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./__mocks__/msw/browser');
    await worker.start();
  }

  const RootComponent = (
    <StrictMode>
      <RouterProvider />
    </StrictMode>
  );

  const rootElement = document.getElementById('root') as HTMLElement;
  const root = createRoot(rootElement);
  root.render(RootComponent);
}

renderRoot();
