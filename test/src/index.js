import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { DialogProvider } from '@shinyongjun/react-dialog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DialogProvider>
      <App />
    </DialogProvider>
  </React.StrictMode>
);
