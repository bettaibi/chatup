import React from 'react';
import { useSnackbar, useAside } from '../../../context/SubjectProvider';

const Chat = () => {
  const { showMsg } = useSnackbar();
  const { toggleAside } = useAside();

  return (
    <div>
      <button onClick={() => showMsg('this is my message', 'error')}>show snackbar</button>
      <button onClick={() => showMsg('another message', 'success')}>show snackbar</button>
      <button onClick={() => toggleAside(<Test />)}>Toggle Asidebar</button>
    </div>
  )
}

const Test = () => {
  const { toggleAside } = useAside();

  return (
    <React.Fragment>
      <p>this is the rendred component</p>
      <button onClick={() => toggleAside()}>Close Asidebar</button>
    </React.Fragment>
  )
}

export default Chat;