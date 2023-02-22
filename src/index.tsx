import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

