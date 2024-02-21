import { useDialog } from '@shinyongjun/react-dialog';
import '@shinyongjun/react-dialog/css';

function App() {
  const {
    alert: customAlert,
    confirm: customConfirm,
    prompt: customPrompt,
  } = useDialog();

  const onAlertClick = async () => {
    await customAlert('are you sure?');
    console.log('alert close');
  };

  const onConfirmClick = async () => {
    const result = await customConfirm('are you sure?');
    console.log(result);
  };

  const onPromptClick = async () => {
    const result = await customPrompt('are you sure?');
    console.log(result);
  };

  const handleKeydown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('enter');
      await customAlert('keyDown Alert');
      // alert('keyDown Alert');
    }
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
      <input type="text" onKeyDown={handleKeydown} />
    </div>
  );
}

export default App;
