'use client';

import { ReactNode } from 'react';
import AlertDialog from './dialog/AlertDialog';
import ConfirmDialog from './dialog/ConfirmDialog';
import PromptDialog from './dialog/PromptDialog';

interface IProps {
  children: ReactNode;
  confirmText?: string;
  cancelText?: string;
  className?: string;
  backgroundClose?: boolean;
}

function DialogProvider({
  children,
  confirmText = 'ok',
  cancelText = 'cancel',
  className = '',
  backgroundClose = false,
}: IProps) {
  return (
    <PromptDialog
      confirmText={confirmText}
      cancelText={cancelText}
      className={className}
      backgroundClose={backgroundClose}
    >
      <AlertDialog
        confirmText={confirmText}
        className={className}
        backgroundClose={backgroundClose}
      >
        <ConfirmDialog
          confirmText={confirmText}
          cancelText={cancelText}
          className={className}
          backgroundClose={backgroundClose}
        >
          {children}
        </ConfirmDialog>
      </AlertDialog>
    </PromptDialog>
  );
}

export default DialogProvider;
