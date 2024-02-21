import { ReactNode, useState } from 'react';
import PromptContext from '../../context/PromptContext';
import Prompt from '../UI/Prompt';

type TPromptState = {
  message: string;
  _default: string;
  onClickOK: (result: string) => void;
  onClickCancel: () => void;
};

interface IProps {
  className: string;
  confirmText: string;
  cancelText: string;
  children: ReactNode;
}

function PromptDialog({
  className,
  children,
  confirmText,
  cancelText,
}: IProps) {
  const [state, setState] = useState<TPromptState>();

  const prompt = (
    message?: string,
    _default?: string
  ): Promise<string | null> => {
    return new Promise((resolve) => {
      setState({
        message: message ?? '',
        _default: _default ?? '',
        onClickOK: (result: string) => {
          setState(undefined);
          resolve(result);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(null);
        },
      });
    });
  };

  return (
    <PromptContext.Provider value={{ prompt }}>
      {children}
      {state && (
        <Prompt
          className={className}
          confirmText={confirmText}
          cancelText={cancelText}
          message={state.message}
          _default={state._default}
          onClickOK={state.onClickOK}
          onClickCancel={state.onClickCancel}
        />
      )}
    </PromptContext.Provider>
  );
}

export default PromptDialog;
