import React from 'react';
import { InputProps, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';


interface InputExtendedProps {
  label?: string;
}

const InputField: React.FC<InputProps & InputExtendedProps> = (props) => {
  const {label, error} = props;
  const color = error? 'error': 'secondary';

  return (

    <React.Fragment>
      {label &&
        <Typography component="span" color={color}
        sx={{marginBottom:'0.3rem', display: 'block'}}>
          {label}
        </Typography>
      }

      <InputBase
        fullWidth
        {...props}
      />
    </React.Fragment>

  )
}

export default InputField