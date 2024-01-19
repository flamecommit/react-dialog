import * as React from 'react';
import { useEffect, useRef } from 'react';
import DialogWrapper from './Wrapper';

interface IProps {
  message: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: IProps) => {
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
    okRef.current?.focus();
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
          onClick={onClose}
        >
          ok
        </button>
      </div>
    </DialogWrapper>
  );
};

export default Alert;
