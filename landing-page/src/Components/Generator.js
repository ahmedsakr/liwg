import './../App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import { FaLinkedin } from 'react-icons/fa';

class Generator extends React.Component  {

  render() {

    return (
      <div>
          <Button variant="contained" color="primary" endIcon={<FaLinkedin/>} onClick={() => this.callLinkedInApi()}>Generate Website</Button>
      </div>
    );
  }

  callLinkedInApi(){
    alert("LinkedinLogin");
  }
}
  
  export default Generator;
  