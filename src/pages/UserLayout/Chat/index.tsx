import React from 'react';
import { useSnackbar } from '../../../context/SnackBarProvider';

const Chat = () => {
  const {showMsg} = useSnackbar();

  return (
    <div>
      <button onClick={()=> showMsg('this is my message', 'error')}>show snackbar</button>
      <button onClick={()=> showMsg('another message', 'success')}>show snackbar</button>
    </div>
  )
}

export default Chat