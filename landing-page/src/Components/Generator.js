import './../App.css';
import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Generator extends React.Component  {


    render() {
  
      return (
        <div>
            <Button variant="contained" color="primary" onClick={() => this.callLinkedInApi()}>Generate Website</Button>
        </div>
      );
    }
  
    callLinkedInApi(){
      alert("LinkedinLogin");
    }
  
  }
  
  export default Generator;
  