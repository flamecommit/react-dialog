import * as React from 'react';
import { ReactNode } from 'react';
import ConfirmDialog from './dialog/ConfirmDialog';
import AlertDialog from './dialog/AlertDialog';
import PromptDialog from './dialog/PromptDialog';

interface IProps {
  children: ReactNode;
}

function DialogProvider({ children }: IProps) {
  return (
    <PromptDialog>
      <AlertDialog>
        <ConfirmDialog>{children}</ConfirmDialog>
      </AlertDialog>
    </PromptDialog>
  );
}

export default DialogProvider;
