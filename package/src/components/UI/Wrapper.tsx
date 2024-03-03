/* eslint-disable jsx-a11y/no-autofocus */
import { ReactNode, RefObject } from 'react';
import Portal from './Portal';

interface IProps {
  className: string;
  children: ReactNode;
  dialogRef: RefObject<HTMLDivElement>;
}

const DialogWrapper = ({ className, children, dialogRef }: IProps) => {
  return (
    <Portal selector="body">
      <div className={`react-dialog__wrapper${className && ` ${className}`}`}>
        <div ref={dialogRef} className="react-dialog__dialog">
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default DialogWrapper;
