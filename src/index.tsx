import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderRoot = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import('./__mocks__/msw/browser');
    worker.start();
  }

  const RootComponent = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  ReactDOM.render(RootComponent, document.getElementById('root'));
}

renderRoot();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
