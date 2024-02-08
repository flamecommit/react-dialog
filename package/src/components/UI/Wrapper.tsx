/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import { ReactNode } from 'react';
import Portal from './Portal';

interface IProps {
  className: string;
  children: ReactNode;
}

const DialogWrapper = ({ className, children }: IProps) => {
  return (
    <Portal selector="body">
      <div className={`react-dialog__wrapper${className && ` ${className}`}`}>
        <div className="react-dialog__dialog">{children}</div>
      </div>
    </Portal>
  );
};

export default DialogWrapper;
