import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
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
      offers={offers}
      cities={CITIES}
    />
  </React.StrictMode>,
);
