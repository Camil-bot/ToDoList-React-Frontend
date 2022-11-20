import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthLayout from './layouts/Unauthenticated';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthLayout/>
  </React.StrictMode>
);

reportWebVitals();
