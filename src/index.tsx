import React from 'react';
import ReactDOM from 'react-dom/client';
import "./app/globalStyles.css";
import Providers from './app/providers';
import { router } from './app/router';
import reportWebVitals from './app/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Providers router={router}/>
  </React.StrictMode>
);
reportWebVitals();

