/* eslint-disable jsx-a11y/no-autofocus */
import { useEffect, useRef } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import DialogWrapper from './Wrapper';

interface IProps {
  className: string;
  message: string;
  confirmText: string;
  cancelText: string;
  _default: string;
  backgroundClose: boolean;
  onClickOK: (result: string) => void;
  onClickCancel: () => void;
}

const Prompt = ({
  className,
  message,
  confirmText,
  cancelText,
  _default,
  backgroundClose,
  onClickOK,
  onClickCancel,
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      input: { value: string };
    };
    onClickOK(target.input.value);
  };

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    });
  }, []);

  useOutsideClick(dialogRef, () => {
    if (backgroundClose) {
      onClickCancel();
    }
  });

  return (
    <DialogWrapper dialogRef={dialogRef} className={className}>
      <form onSubmit={handleSubmit}>
        <div
          className="react-dialog__message"
          dangerouslySetInnerHTML={{ __html: message }}
        />
        <input
          ref={inputRef}
          type="text"
          id="input"
          className="react-dialog__input"
          defaultValue={_default}
          autoFocus
        />
        <div className="react-dialog__button-wrapper">
          <button type="submit" className="react-dialog__button-ok">
            {confirmText}
          </button>
          <button
            type="reset"
            className="react-dialog__button-cancel"
            onClick={onClickCancel}
          >
            {cancelText}
          </button>
        </div>
      </form>
    </DialogWrapper>
  );
};

export default Prompt;
