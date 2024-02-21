import { ReactNode, useState } from 'react';
import AlertContext from '../../context/AlertContext';
import Alert from '../UI/Alert';

type TAlertState = {
  message: string;
  onClose: () => void;
};

interface IProps {
  className: string;
  confirmText: string;
  children: ReactNode;
}

function AlertDialog({ children, confirmText, className }: IProps) {
  const [state, setState] = useState<TAlertState>();

  const alert = (message?: any): Promise<undefined> => {
    return new Promise((resolve) => {
      setState({
        message: message !== undefined ? `${message}` : '',
        onClose: () => {
          setState(undefined);
          resolve(undefined);
        },
      });
    });
  };

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      {state && (
        <Alert
          className={className}
          confirmText={confirmText}
          message={state.message}
          onClose={state.onClose}
        />
      )}
    </AlertContext.Provider>
  );
}

export default AlertDialog;
