/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import { useRef, useEffect } from 'react';
import DialogWrapper from './Wrapper';

interface IProps {
  message: string;
  confirmText: string;
  cancelText: string;
  onClickOK: () => void;
  onClickCancel: () => void;
}

const Confirm = ({
  message,
  confirmText,
  cancelText,
  onClickOK,
  onClickCancel,
}: IProps) => {
  const okRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClickCancel();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClickCancel]);

  useEffect(() => {
    setTimeout(() => {
      okRef.current?.focus();
    });
  }, []);

  return (
    <DialogWrapper>
      <div
        className="react-dialog__message"
        dangerouslySetInnerHTML={{ __html: message }}
      />
      <div className="react-dialog__button-wrapper">
        <button
          ref={okRef}
          type="button"
          className="react-dialog__button-ok"
          onClick={onClickOK}
          autoFocus
        >
          {confirmText}
        </button>
        <button
          type="button"
          className="react-dialog__button-cancel"
          onClick={onClickCancel}
        >
          {cancelText}
        </button>
      </div>
    </DialogWrapper>
  );
};

export default Confirm;
