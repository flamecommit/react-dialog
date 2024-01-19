/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import { useEffect } from 'react';
import DialogWrapper from './Wrapper';

interface IProps {
  message: string;
  _default: string;
  onClickOK: (result: string) => void;
  onClickCancel: () => void;
}

const Prompt = ({ message, _default, onClickOK, onClickCancel }: IProps) => {
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

  return (
    <DialogWrapper>
      <form onSubmit={handleSubmit}>
        <div className="react-dialog__message">{message}</div>
        <input
          type="text"
          id="input"
          className="react-dialog__input"
          defaultValue={_default}
          autoFocus
        />
        <div className="react-dialog__button-wrapper">
          <button type="submit" className="react-dialog__button-ok">
            ok
          </button>
          <button
            type="reset"
            className="react-dialog__button-cancel"
            onClick={onClickCancel}
          >
            cancel
          </button>
        </div>
      </form>
    </DialogWrapper>
  );
};

export default Prompt;
