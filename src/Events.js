import React, { Component } from 'react';

class Events extends Component {
  render() {
    return(
      <div>
        <h1>Events</h1>

        <section>
          <p>Want to learn more about XR-related opportunities or enhance your XR skills? Or, do you want to try out VR? Below are upcoming events for workshops, VR demos, and XR-related presentations.</p>
        </section>
        <section style={{marginTop:128}}>
          <p>Here's a simple demo of a 360 video of []. You can learn to create similar projects in our workshops.</p>
          <div style={{height: 400, background: '#efefef'}}>
            {/* <a-scene embedded>
              <a-videosphere rotation="0 180 0" src="#nasa-vid">
              </a-videosphere>
              <a-assets>
                <video id="nasa-vid" style={{display:'none'}} 
                  autoPlay loop crossOrigin="anonymous" playsInline>
                <source type="video/mp4"
                  src="/nasa-vid.mp4" />
                </video>
              </a-assets>
            </a-scene> */}
          </div>
        </section>

      </div>
    )
  }
}

export default Events;