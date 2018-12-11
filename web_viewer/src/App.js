import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.css';

import sketches from '../../sketches';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rotation: 180,
    }

    setInterval(()=> {
      this.setState({rotation: this.state.rotation + 30})
    },1000)
  }
  render() {
    return (
      <div className="App">
        <P5Wrapper sketch={sketches.starfield} rotation={this.state.rotation}/>
      </div>
    );
  }
}

export default App;
