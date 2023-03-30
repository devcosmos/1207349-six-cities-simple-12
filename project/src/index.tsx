import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES } from './const';

const Setting = {
  offersDisplayCount: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      offersDisplayCount={Setting.offersDisplayCount}
      cities={CITIES}
    />
  </React.StrictMode>,
);
