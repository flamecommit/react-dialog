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
}

function DialogProvider({
  children,
  confirmText = 'ok',
  cancelText = 'cancel',
  className = '',
}: IProps) {
  return (
    <PromptDialog
      confirmText={confirmText}
      cancelText={cancelText}
      className={className}
    >
      <AlertDialog confirmText={confirmText} className={className}>
        <ConfirmDialog
          confirmText={confirmText}
          cancelText={cancelText}
          className={className}
        >
          {children}
        </ConfirmDialog>
      </AlertDialog>
    </PromptDialog>
  );
}

export default DialogProvider;
