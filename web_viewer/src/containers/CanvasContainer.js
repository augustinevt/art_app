import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import {Button} from 'antd';


import sketches from '../../../sketches';


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
    const selectedSketch = !this.state.selected ?
      sketches.mengerSponge :
      sketches[this.state.selected];

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
