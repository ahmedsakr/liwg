import React from 'react';
import { Button } from '@material-ui/core';
import { FaLinkedin } from 'react-icons/fa';

class LinkedInLogin extends React.Component  {

  render() {

    return (
      <div>
        <Button variant="contained" color="primary" startIcon={<FaLinkedin/>} href="http://localhost:5000/auth/linkedin/login">Sign in with LinkedIn</Button>
      </div>
    );
  }
}
  
export default LinkedInLogin;
  