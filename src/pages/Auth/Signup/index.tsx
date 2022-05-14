import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';


const Signup = () => {
  return (
    <Box className="bg__gradient">
      <Container maxWidth="sm" sx={{ display: 'grid', alignContent: 'center', height: '100vh' }}>
        <Box className="glass__blur b__radius" p="1.5rem" width="100%"
        sx={{maxHeight:'95vh', overflowY: 'auto', height: 'auto'}}>
          
          <Box mb={2}>
            <img src="/chatup/img/58.png" alt="chatup_logo" />
            <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>Sign up</Typography>

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