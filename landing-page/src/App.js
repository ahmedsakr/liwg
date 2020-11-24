import React from 'react';
import logo from './images/liwg-logo-200x200.png'
import LinkedInLogin from './Components/LinkedInLogin';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import flowStates from './FlowStates';

const styles = {

    app: {
      textAlign: 'center',
    },

    appHeader: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#ffffffe7'
    },

    paper: {
      width: '50%',
      padding: '8px',
      margin: '16px',
      display: 'inline-block'
    },
};

class App extends React.Component  {

  state = {
    userState : flowStates.SIGN_IN
  }

  componentDidMount(){
    document.body.style.backgroundColor = '#e0d9cd';
  }

  render() {

    const { classes } = this.props;

    var flowContent = null;

    switch(this.state.userState) {
      
      case flowStates.SIGN_IN:
        flowContent = 
          <div>
              <Paper className={classes.paper} elevation={3}> (Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie eleifend quam nec fermentum. 
              Donec erat nunc, mollis eu ex sit amet, tempor scelerisque nunc. 
              Praesent lobortis sollicitudin sollicitudin. Sed pharetra sed ligula sit amet gravida. 
              Vestibulum pretium nulla orci, at varius lorem dictum quis.</Paper>

              <LinkedInLogin/>
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
      <div className={classes.app}>
        <header className={classes.appHeader}>        
          <img src={logo} alt={''}/>
        </header>

        {flowContent}
        
      </div>
    );
  }

}

export default withStyles(styles)(App);
