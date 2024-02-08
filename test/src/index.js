import { DialogProvider } from '@shinyongjun/react-dialog';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DialogProvider confirmText="test">
      <App />
    </DialogProvider>
  </React.StrictMode>
);
