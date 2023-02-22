import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FontStyles from './styles/fonts';
import GlobalStyles from './styles/globalStyles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FontStyles />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

