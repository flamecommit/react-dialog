import { useContext } from 'react';
import AlertContext from '../context/AlertContext';
import ConfirmContext from '../context/ConfirmContext';
import PromptContext from '../context/PromptContext';

const useDialog = () => {
  const { alert } = useContext(AlertContext);
  const { confirm } = useContext(ConfirmContext);
  const { prompt } = useContext(PromptContext);

  return { alert, confirm, prompt };
};

export default useDialog;
