import * as React from 'react';
import { useContext } from 'react';
import {
  AlertContext,
  ConfirmContext,
  PromptContext,
} from '@shinyongjun/react-dialog';
import '@shinyongjun/react-dialog/css';

function App() {
  const { alert: alertConfirm } = useContext(AlertContext);
  const { confirm: customConfirm } = useContext(ConfirmContext);
  const { prompt: promptConfirm } = useContext(PromptContext);

  const onAlertClick = async () => {
    await alertConfirm('are you sure?');
    console.log('alert close');
  };

  const onConfirmClick = async () => {
    const result = await customConfirm('are you sure?');
    console.log(result);
  };

  const onPromptClick = async () => {
    const result = await promptConfirm('are you sure?');
    console.log(result);
  };

  return (
    <div>
      <div className="react-dialog">
        <button type="button" onClick={onAlertClick}>
          Open to Alert Dialog
        </button>
        <button type="button" onClick={onConfirmClick}>
          Open to Confirm Dialog
        </button>
        <button type="button" onClick={onPromptClick}>
          Open to Confirm Dialog
        </button>
      </div>
      <div className="javascript-dialog">
        <button type="button" onClick={() => alert('asfdasd')}>
          Open to Confirm Dialog
        </button>
        <button type="button" onClick={() => confirm('asdf')}>
          Open to Confirm Dialog
        </button>
        <button type="button" onClick={() => prompt('asdf')}>
          Open to Confirm Dialog
        </button>
      </div>
    </div>
  );
}

export default App;
