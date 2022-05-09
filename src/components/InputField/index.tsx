import React from 'react';
import { TextFieldProps, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
    backgroundColor: '#FFFFFF',
    root: {
        '& .MuiOutlinedInput-input' : {
          zIndex: 99999999,
          backgroundColor: '#fff'
        },
        '& .MuiOutlinedInput-root': {
          '& .MuiOutlinedInput-inputAdornedStart': {
            zIndex: 999999999
          },
          '& .MuiInputAdornment-positionStart': {
            zIndex: 9999999999
          },
        },
      },
});

const InputField: React.FC<TextFieldProps> = (props) => {

  return (
    <CustomTextField hiddenLabel {...props} />
  )
}

export default InputField