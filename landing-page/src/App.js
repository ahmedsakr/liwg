import './App.css';
import React from 'react';
import logo from './images/liwg-logo-200x200.png'
import LinkedInLogin from './Components/LinkedInLogin';
import { Paper } from '@material-ui/core';
import flowStates from './FlowStates';

class App extends React.Component  {

  state = {
    userState : flowStates.SIGN_IN
  }

  render() {

    var flowContent = null;

    switch(this.state.userState) {
      
      case flowStates.SIGN_IN:
        flowContent = 
          <div>
              <Paper className="Paper" elevation={3}> (Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie eleifend quam nec fermentum. 
              Donec erat nunc, mollis eu ex sit amet, tempor scelerisque nunc. 
              Praesent lobortis sollicitudin sollicitudin. Sed pharetra sed ligula sit amet gravida. 
              Vestibulum pretium nulla orci, at varius lorem dictum quis.</Paper>

              <LinkedInLogin></LinkedInLogin>
          </div>
        break;

      case flowStates.AUTH_FAILED:
        flowContent = 
          <div>
            <h2>There was a problem signing you in. Please try again.</h2>
            <LinkedInLogin></LinkedInLogin>
          </div>
        break;
      case flowStates.AUTH_SUCCESS:
        //Template selection
        break;

      default:
        flowContent = <h1>ERROR</h1>
    }

    return (
      <div className="App">
        <header className="App-header">        
          <img src={logo} alt={''}/>
        </header>

        {flowContent}
        
      </div>
    );
  }

}

export default App;
