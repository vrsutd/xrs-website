import React, { Component } from 'react';
import 'aframe';

class Home extends Component {

  render() {
    return(
      <div style={{height: 200}}>
        <a-scene>
          <a-video src="airbending.mp4"></a-video>
        </a-scene>
      </div>
    )
  }
}

export default Home;