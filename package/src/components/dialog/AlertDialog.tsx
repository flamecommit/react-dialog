import * as React from 'react';
import { ReactNode, useState } from 'react';
import AlertContext from '../../context/AlertContext';
import Alert from '../UI/Alert';

type AlertState = {
  message: string;
  onClose: () => void;
};

interface IProps {
  children: ReactNode;
}

function AlertDialog({ children }: IProps) {
  const [state, setState] = useState<AlertState>();

  const alert = (message?: any): Promise<undefined> => {
    return new Promise((resolve) => {
      setState({
        message: message !== undefined ? `${message}` : '',
        onClose: () => {
          console.log('onClick');
          setState(undefined);
          resolve(undefined);
        },
      });
    });
  };

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      {state && <Alert message={state.message} onClose={state.onClose} />}
    </AlertContext.Provider>
  );
}

export default AlertDialog;
