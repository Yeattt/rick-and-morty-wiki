import React from 'react';
import ReactDOM from 'react-dom/client';
import RickAndMortyApp from './RickAndMortyApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RickAndMortyApp />
  </React.StrictMode>,
);
