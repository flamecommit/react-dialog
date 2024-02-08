import * as React from 'react';
import { useEffect, useRef } from 'react';
import DialogWrapper from './Wrapper';

interface IProps {
  className: string;
  message: string;
  confirmText: string;
  onClose: () => void;
}

const Alert = ({ className, message, confirmText, onClose }: IProps) => {
  const okRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    setTimeout(() => {
      okRef.current?.focus();
    });
  }, []);

  return (
    <DialogWrapper className={className}>
      <div
        className="react-dialog__message"
        dangerouslySetInnerHTML={{ __html: message }}
      />
      <div className="react-dialog__button-wrapper">
        <button
          ref={okRef}
          type="button"
          className="react-dialog__button-ok"
          onClick={onClose}
        >
          {confirmText}
        </button>
      </div>
    </DialogWrapper>
  );
};

export default Alert;
