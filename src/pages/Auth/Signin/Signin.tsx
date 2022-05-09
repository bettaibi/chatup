import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Stack,
  Button
} from '@mui/material';
import { Google, FacebookOutlined } from '@mui/icons-material';
import SignInForm from './SignInForm';
import { Link } from 'react-router-dom';

const Signin: React.FC = () => {

  return (
    <Box className="bg__gradient" p={2} sx={{ display: 'grid', placeContent: 'center' }}>
      <Box className="glass__blur b__radius" p={2}>
        <Box mb={2}>
          <img src="/chatup/img/58.png" alt="chatup_logo" />
          <Typography variant="h5" sx={{fontWeight: 600}}>Sign in</Typography>

          <Typography variant="body1" sx={{ display: 'inline-block' }}>
            Don't have an account? &nbsp;
          </Typography>
          <Link to="/chatup/signup">
            <Typography component="span" className="link" sx={{color: 'primary.main'}}>
               sign up
            </Typography>
          </Link>
        </Box>

        {/* Sign in Form */}
        <SignInForm />

        <Box my={2}>
         <Divider>
           <Typography>
             Or continue with
           </Typography>
         </Divider>
        </Box>

        {/* Sign Credentials */}
        <Stack direction="row" spacing={2}>
          <Button fullWidth size="small" variant='rounded' color="inherit">
            <Google />
          </Button>
          <Button fullWidth size="small" variant='rounded' color="inherit">
            <FacebookOutlined />
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Signin;