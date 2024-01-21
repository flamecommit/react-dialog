/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const DialogWrapper = ({ children }: IProps) => {
  return (
    <div className="react-dialog__wrapper">
      <div className="react-dialog__dialog">{children}</div>
    </div>
  );
};

export default DialogWrapper;
