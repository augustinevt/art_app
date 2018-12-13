import React, { Component } from 'react';
import './App.css';
import CanvasViewer from './containers/CanvasContainer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CanvasViewer/>
      </div>
    );
  }
}

export default App;
