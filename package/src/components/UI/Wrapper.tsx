/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import { ReactNode } from 'react';
import Portal from './Portal';

interface IProps {
  children: ReactNode;
}

const DialogWrapper = ({ children }: IProps) => {
  return (
    <Portal selector="body">
      <div className="react-dialog__wrapper">
        <div className="react-dialog__dialog">{children}</div>
      </div>
    </Portal>
  );
};

export default DialogWrapper;
