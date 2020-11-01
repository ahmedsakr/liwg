import './App.css';
import React from 'react';
import logo from './images/liwg-logo-200x200.png'
import Generator from './Components/Generator';
import { Paper } from '@material-ui/core';

class App extends React.Component  {

  render() {

    return (
      <div className="App">
        <header className="App-header">        
          <img src={logo} alt={''}/>
        </header>

        <Paper className="Paper" elevation={3}> (Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie eleifend quam nec fermentum. 
          Donec erat nunc, mollis eu ex sit amet, tempor scelerisque nunc. 
          Praesent lobortis sollicitudin sollicitudin. Sed pharetra sed ligula sit amet gravida. 
          Vestibulum pretium nulla orci, at varius lorem dictum quis.</Paper>

        <Generator></Generator>
      </div>
    );
  }

}

export default App;
