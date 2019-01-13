import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import LazyHero from 'react-lazy-hero';
import MediaQuery from 'react-responsive';

mapboxgl.accessToken = 'pk.eyJ1IjoieHJzdXRkIiwiYSI6ImNqcXRueXFnaDBicmg0MXJjaTY1cmR6NXMifQ.TAgPQ6qobDRufM2AqG2coQ';

class Home extends Component {
  state = {
    lng: -96.7505148,
    lat: 32.9861116,
    zoom: 17
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    new mapboxgl.Marker()
      .setLngLat([this.state.lng+0.00016, this.state.lat+0.00016])
      .addTo(map);
    map.scrollZoom.disable();
  }

  render() {
    const styles = {
      title: {
        fontSize: 48,
        textAlign: 'center',
      },
      mapContainer: {
        position: 'relative',
        height: 400,
        width: '100%',
      },
      map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%'
      },
    };


    return(
      <div>
        <LazyHero 
          imageSrc="/placeholder.jpg"
          color="#77aaa9"
          opacity={0.4}
          minHeight="400px"
          parallaxOffset={100}>
          <MediaQuery query="(min-width: 842px)">
            <h1 style={{fontSize:46, color:'#fff'}}>Extended Reality Society</h1>
          </MediaQuery>
          <MediaQuery query="(max-width: 841px)">
            <MediaQuery query="(min-width: 367px)">
              <h1 style={{fontSize:38, color:'#fff'}}>Extended Reality<br/> Society</h1>
            </MediaQuery>
            <MediaQuery query="(max-width: 366px)">
              <h1 style={{fontSize:32, color:'#fff'}}>Extended Reality<br/> Society</h1>
            </MediaQuery>
          </MediaQuery>
        </LazyHero>

        <p style={{marginTop:74, textAlign:'center'}}>We are the Extended Reality Society (XRS) at the University of Texas at Dallas. Founded in 2017, we have stayed true to our mission of []. XRS is devoted to [].</p>
        
        <section style={{marginTop:128}}>
          <h2>What is XR?</h2>
          <p>Extended Reality (XR) is [].</p>
        </section>

        <section style={{marginTop:128, marginBottom:128}}>
          <h2>Location</h2>
          <p>Our general meetings are usually held in the Erik Jonsson School of Engineering South (<a style={{color:'#0a9998', textDecoration:'none', borderBottom:'dotted 1px #0a9998'}} href="https://www.openstreetmap.org/search?query=32.9861116%2C-96.7505148#map=18/32.98611/-96.75051" target="_blank" rel="noopener noreferrer">ECSS</a>) building. Find out more about upcoming events here!</p>
          <div style={styles.mapContainer}>
            <div style={styles.map} ref={el => this.mapContainer = el} />
          </div>
        </section>
      </div>
    )
  }
}

export default Home;