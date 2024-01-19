/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import { useEffect } from 'react';
import DialogWrapper from './Wrapper';

interface IProps {
  message: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: IProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <DialogWrapper>
      <div className="react-dialog__message">{message}</div>
      <div className="react-dialog__button-wrapper">
        <button
          type="button"
          className="react-dialog__button-ok"
          onClick={onClose}
          autoFocus
        >
          ok
        </button>
      </div>
    </DialogWrapper>
  );
};

export default Alert;
