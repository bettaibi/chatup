import React from 'react';
import { TextFieldProps, TextField } from '@mui/material';


const InputField: React.FC<TextFieldProps> = (props) => {

  return (
    <TextField
      variant='standard'
      InputLabelProps={{shrink: true}}
      size="small"
      InputProps={{style: {
        backgroundColor: 'transparent',
       
      }
      }}
      {...props}
   />
  )
}

export default InputField