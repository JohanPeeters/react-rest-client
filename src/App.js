import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import News from './News'
import ResourceUse from './ResourceUse'
import Friends from './Friends'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to l33t h4x0r social network</h1>
        </header>
        <News/>
        <ResourceUse/>
        <Friends/>
      </div>
    );
  }
}

export default App;
