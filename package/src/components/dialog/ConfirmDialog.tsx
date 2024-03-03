import { ReactNode, useState } from 'react';
import ConfirmContext from '../../context/ConfirmContext';
import Confirm from '../UI/Confirm';

type TConfirmState = {
  message: string;
  onClickOK: () => void;
  onClickCancel: () => void;
};

interface IProps {
  className: string;
  confirmText: string;
  cancelText: string;
  children: ReactNode;
  backgroundClose: boolean;
}

function ConfirmDialog({
  className,
  children,
  confirmText,
  cancelText,
  backgroundClose,
}: IProps) {
  const [state, setState] = useState<TConfirmState>();

  const confirm = (message?: string): Promise<boolean> => {
    return new Promise((resolve) => {
      // state를 변경해 Confirm 다이얼로그를 띄운다.
      setState({
        message: message ?? '',
        onClickOK: () => {
          // ok 클릭한 경우, 다이얼로그 닫고 true로 Promise 종료
          setState(undefined);
          resolve(true);
        },
        onClickCancel: () => {
          // cancel 클릭한 경우, 다이얼로그 닫고 false로 Promise 종료
          setState(undefined);
          resolve(false);
        },
      });
    });
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {/* state 여부에 따라 Confirm 다이얼로그 띄우기 */}
      {state && (
        <Confirm
          className={className}
          confirmText={confirmText}
          cancelText={cancelText}
          message={state.message}
          onClickOK={state.onClickOK}
          onClickCancel={state.onClickCancel}
          backgroundClose={backgroundClose}
        />
      )}
    </ConfirmContext.Provider>
  );
}

export default ConfirmDialog;
