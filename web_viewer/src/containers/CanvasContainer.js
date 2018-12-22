import React, { Component } from 'react';
// eslint-disable-next-line
import P5Wrapper from 'react-p5-wrapper';
// import p5 from 'p5';
// import "p5/lib/addons/p5.sound.js";

// import "p5/lib/addons/p5.sound.js";
import {Button} from 'antd';


import sketches from '../../../sketches';
import test_sketch from '../test_sketch';


class CanvasViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: 180,
      selected: null,
    }

    setInterval(()=> {
      this.setState({rotation: this.state.rotation + 30})
    },1000)
  }

  render() {
    const selectedSketch = test_sketch;
    // const selectedSketch = !this.state.selected ?
    //   test_sketch :
    //   sketches[this.state.selected];

    return (
      <div>
        { this.state.selected }
        {
          Object.keys(sketches).map((sketch) =>
            <Button
              onClick={() => {
                this.setState({...this.state, selected: sketch})
              }}>
              {sketch}
            </Button>
          )
        }

        <P5Wrapper sketch={selectedSketch} rotation={this.state.rotation}/>
      </div>
    )
  }
}

export default CanvasViewer;
