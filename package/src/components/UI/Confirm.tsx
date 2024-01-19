import * as React from 'react';

interface Props {
  message: string;
  onClickOK: () => void;
  onClickCancel: () => void;
}

const Confirm = ({ message, onClickOK, onClickCancel }: Props) => {
  return (
    <div className="dialog-container">
      <div className="dialog">
        <h2 className="title">Confirm</h2>
        <div className="text">{message}</div>
        <div className="buttons">
          <button onClick={onClickCancel}>cancel</button>
          <button onClick={onClickOK}>ok</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
