import { useEffect, useRef } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import DialogWrapper from './Wrapper';

interface IProps {
  className: string;
  message: string;
  confirmText: string;
  backgroundClose: boolean;
  onClose: () => void;
}

const Alert = ({
  className,
  message,
  confirmText,
  backgroundClose,
  onClose,
}: IProps) => {
  const okRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

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

  useOutsideClick(dialogRef, () => {
    if (backgroundClose) {
      onClose();
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
          onClick={onClose}
        >
          {confirmText}
        </button>
      </div>
    </DialogWrapper>
  );
};

export default Alert;
