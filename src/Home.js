import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import logo from './logo.png';

const styles = theme => ({
  hero: {
    width: '100%',
    backgroundColor: '#a8c4c4', 
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      height: 800, 
      paddingTop: 150, 
    },
    [theme.breakpoints.down('md')]: {
      height: 650, 
      paddingTop: 120, 
    },
    [theme.breakpoints.down('sm')]: {
      height: 450, 
      paddingTop: 70, 
    },
  },
  heroLogo: {
    backgroundColor: '#262626',
    [theme.breakpoints.down('lg')]: {
      width: 200, 
      height: 200, 
      borderRadius: 25,
    },
    [theme.breakpoints.down('md')]: {
      width: 180, 
      height: 180, 
      borderRadius: 15,
    },
    [theme.breakpoints.down('sm')]: {
      width: 120, 
      height: 120, 
      borderRadius: 9,
    },
  },
  heroHeading: {
    [theme.breakpoints.down('lg')]: {
      fontSize: 64,
      paddingTop: 36,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 56,
      paddingTop: 24,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 42,
      paddingTop: 18,
    },
  },
  content: {
    padding: theme.spacing.unit * 3,
  },
  heading: {
    color: '#00695c',
    [theme.breakpoints.down('lg')]: {
      fontSize: 32,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  section: {
    maxWidth: 1024,
    margin: '0 auto',
    padding: '48px 0',
  },
  link: {
    color: '#0c897b',
    textDecoration: 'none',
    borderBottom: '1px dotted #a8c4c4',
  },
  demo: {
    margin: '64px 0',
  },
  demoText: {
    margin: '5px 0',
    fontWeight: 600,
    color: '#0c897b',
  },
  demoContainer: {
    backgroundColor: '#f2f2f2',
    position: 'relative',
  },
  _scrollOverlay: {
    height: 550, 
    width: '100%', 
    backgroundColor: 'rgba(168, 196, 196, 0.6)',
    position: 'absolute',
    top: 0, 
    left: 0,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 200,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: true,
      frameLoaded: false,
    };
  }

  handleFabClick = () => {
    this.setState({ overlay: !this.state.overlay });
  };

  handleImageLoaded = () => {
    console.log('asdf');
    this.setState({ imageLoaded: true });
  };

  handleFrameLoaded = () => {
    this.setState({ frameLoaded: true });
  };

  render() {
    const { classes } = this.props;
    const { overlay, frameLoaded } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <img className={classes.heroLogo} src={logo} alt="hero" />
          <h1 className={classes.heroHeading}>Extended Reality Society</h1>
        </div>
        <div className={classes.content}>
          
          <section className={classes.section}>
            <h2 className={classes.heading}>A Bit About Us</h2>
            <p>We are a group of UT Dallas students who are excited about all things XR. Established in 2016, 
            as the Virtual Reality Society (VRS), we were inspired by the cutting edge VR applications. We wanted to
            share and explore these VR applications with our community. In 2018, VRS was rebranded to the Extended
            Reality Society (XRS) to include the spectrum from "completely real" to "completely virtual" applications,
            which include mixed reality, augmented reality. Despite our rebranding, our mission has stayed the same:
            we strive to promote awareness of XR to the UT Dallas and DFW community by providing information and resources
            to community members interested in XR.</p>
          </section>
          
          <section className={classes.section}>
            <h2 className={classes.heading}>What is XR?</h2>
            <p>Extended Reality describes the human computer interaction to achieve stages of emersion with a virtual environment.
              XR encompasses the spectrum from completely virtual environments to virtual enviroments augmented on top of physical
              ("real") environments &mdash; and a combination of the two.
            </p>
          </section>

          <section className={classes.section}> https://www.youtube.com/watch?v=lil_I_-7aOM
            <h2 className={classes.heading}>Try it out!</h2>
            <p>Try out a simple 360 video player from &nbsp;
              <a className={classes.link} href="https://www.youtube.com/watch?v=lil_I_-7aOM" target="_blank" rel="noopener noreferrer">NASA</a> 
            &nbsp; built using &nbsp;
              <a className={classes.link} href="https://facebook.github.io/react-360/" target="_blank" rel="noopener noreferrer">React360</a> 
            . You can learn to create cool projects like this at our workshops. To find out more about workshops and related events, 
            check out our &nbsp;
            <a className={classes.link} href="/news">news page</a> 
            !</p>
          </section>
          
          <div className={classes.demo}>
            <p className={classes.demoText}>Click on the floating action button to toggle the overlay for 
            interacting with the 360 video.</p>
            <div className={classes.demoContainer}>
              {overlay && <div className={classes._scrollOverlay} />}
              {frameLoaded && 
              <Fab size="small" color="secondary" aria-label="Toggle-overlay" className={classes.fab} onClick={this.handleFabClick}>
                <Icon>{overlay ? 'touch_app' : 'not_interested'}</Icon>
              </Fab>}
              <iframe src={process.env.PUBLIC_URL +  '/react360/index.html'} height="550" width="100%" frameBorder="0" title="360-demo" 
                onLoad={this.handleFrameLoaded} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
