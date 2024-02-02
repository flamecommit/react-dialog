'use client';

import * as React from 'react';
import { ReactNode } from 'react';
import ConfirmDialog from './dialog/ConfirmDialog';
import AlertDialog from './dialog/AlertDialog';
import PromptDialog from './dialog/PromptDialog';

interface IProps {
  children: ReactNode;
  confirmText?: string;
  cancelText?: string;
}

function DialogProvider({
  children,
  confirmText = 'ok',
  cancelText = 'cancel',
}: IProps) {
  return (
    <PromptDialog confirmText={confirmText} cancelText={cancelText}>
      <AlertDialog confirmText={confirmText} cancelText={cancelText}>
        <ConfirmDialog confirmText={confirmText} cancelText={cancelText}>
          {children}
        </ConfirmDialog>
      </AlertDialog>
    </PromptDialog>
  );
}

export default DialogProvider;
