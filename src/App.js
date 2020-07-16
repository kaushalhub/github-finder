import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Layout/Navbar';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fa fa-github"/>
      </div>
    );
  }
}

export default App;