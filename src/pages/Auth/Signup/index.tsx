import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Stack,
  Button,
  Container,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';


const Signup = () => {
  return (
    <Box className="bg__gradient">
      <Container maxWidth="sm" sx={{ display: 'grid', alignContent: 'center', height: '100vh' }}>
        <Box className="glass__blur b__radius" p={2} width="100%">
          <Box mb={2}>
            <img src="/chatup/img/58.png" alt="chatup_logo" />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>Sign up</Typography>

            <Typography variant="body1" sx={{ display: 'inline-block' }}>
              Don't have an account? &nbsp;
            </Typography>
            <Link to="/chatup/signin">
              <Typography component="span" className="link" sx={{ color: 'primary.main' }}>
                sign in
              </Typography>
            </Link>
          </Box>

          {/* Singup Form */}
          <SignupForm />
   
        </Box>
      </Container>
    </Box>
  )
}

export default Signup;