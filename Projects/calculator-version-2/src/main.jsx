import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Correct import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
