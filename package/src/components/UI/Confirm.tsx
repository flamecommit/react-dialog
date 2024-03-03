/* eslint-disable jsx-a11y/no-autofocus */
import { useEffect, useRef } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import DialogWrapper from './Wrapper';

interface IProps {
  className: string;
  message: string;
  confirmText: string;
  cancelText: string;
  backgroundClose: boolean;
  onClickOK: () => void;
  onClickCancel: () => void;
}

const Confirm = ({
  className,
  message,
  confirmText,
  cancelText,
  backgroundClose,
  onClickOK,
  onClickCancel,
}: IProps) => {
  const okRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

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

  useOutsideClick(dialogRef, () => {
    if (backgroundClose) {
      onClickCancel();
    }
  });

  return (
    <DialogWrapper dialogRef={dialogRef} className={className}>
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
