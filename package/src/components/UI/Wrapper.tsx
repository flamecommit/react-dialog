/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const DialogWrapper = ({ children }: IProps) => {
  const stopPropagation = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('stopPropagation');
    e.stopPropagation();
  };

  return (
    <div className="react-dialog__wrapper" onKeyUpCapture={stopPropagation}>
      <div className="react-dialog__dialog">{children}</div>
    </div>
  );
};

export default DialogWrapper;
