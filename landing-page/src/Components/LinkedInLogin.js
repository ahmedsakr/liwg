import './../App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import { FaLinkedin } from 'react-icons/fa';

class LinkedInLogin extends React.Component  {

  render() {

    return (
      <div>
        <Button variant="contained" color="primary" startIcon={<FaLinkedin/>} onClick={() => this.callLinkedInApi()}>Sign in with LinkedIn</Button>
      </div>
    );
  }

  callLinkedInApi(){
    //alert("LinkedinLogin");

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = 'https://www.linkedin.com/oauth/v2/authorization' +
    //   '?response_type=code' +
    //   '&client_id=78c63g5t25dr9l' + 
    //   '&redirect_uri=http://127.0.0.1:3000/auth/linkedin/callback' + 
    //   '&scope=r_liteprofile';


    // fetch(proxyurl + url)
    // .then(res => res.text())
    // .then((html) => {
    //   var parser = new DOMParser();
    //   var doc = parser.parseFromString(html, "text/html");
    //   console.log(doc);

    // })
    // .catch(console.log)

  }
}
  
export default LinkedInLogin;
  