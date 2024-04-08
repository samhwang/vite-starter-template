import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

async function renderRoot() {
  if (import.meta.env.DEV) {
    const { worker } = await import('../__mocks__/msw/browser');
    await worker.start();
  }

  const RootComponent = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  const rootElement = document.getElementById('root') as HTMLElement;
  const root = createRoot(rootElement);
  root.render(RootComponent);
}

renderRoot();
