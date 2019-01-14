import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import 'aframe';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = ({
  dialog: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  },
  dialogPaper: {
    margin: 'auto',
    maxHeight: 'none',
    minHeight: 320,
    minWidth: 280,
    width: '50vw',
  },
  dialogButton: {
    color: '#0a9998',
  },
});

class Events extends Component {
  state = {
    dialog: {
      open: false,
      title: '',
      content: '',
      location: '',
      startTime: '',
      endTime: '',
    },
  };

  handleClickOpen = () => {
    this.setState({ 
      dialog: {
        open: true,
        title: '',
        content: '',
        location: '',
        startTime: '',
        endTime: '',
      } 
    });
  };

  handleClose = () => {
    this.setState({ 
      dialog: {
        open: false,
        type: '',
        title: '',
        content: '',
        location: '',
        startTime: '',
        endTime: '',
        postUrl: ''
      } 
    });
  };


  render() {
    const { classes } = this.props;

    return(
      <div>
        <h1>Events</h1>

        <Dialog
          style={{margin:0}}
          className={classes.dialog}
          open={this.state.dialog.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          classes={{
            root: classes.dialog,
            paper: classes.dialogPaper
          }}
        >
          <DialogTitle id="alert-dialog-slide-title">
            <span style={{color:'#0a9998', fontWeight:600, fontSize:24}}>{this.state.dialog.title || 'Untitled'}</span>
          </DialogTitle>
          <DialogContent>
            <div>
              <div style={{display:'flex'}}>
                <Icon>access_time</Icon> 
                <p style={{marginTop:4, marginLeft:12}}>{this.state.dialog.startTime || '???'} to {this.state.dialog.endTime || '???'}</p>
              </div>
              <div style={{display:'flex'}}>
                <Icon>place</Icon>
                <p style={{marginTop:4, marginLeft:12}}>{this.state.dialog.location || 'No location specified'}</p>
              </div>
              <div style={{display:'flex', maxHeight:280, overflowY:'scroll'}}>
                <Icon>event_notes</Icon>
                <p style={{marginTop:4, marginLeft:12}}>{this.state.dialog.content || 'No content'}</p>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <a style={{textDecoration:'none'}} href={this.state.dialog.postUrl || '#'} target="_blank" rel="noopener noreferrer">
              <Button onClick={this.handleClose} classes={{root: classes.dialogButton}}>
                view post
              </Button>
            </a>
          </DialogActions>
        </Dialog>

        <section>
          <p>Want to learn more about XR-related opportunities or enhance your XR skills? Or, do you want to try out VR? Below are upcoming events for workshops, VR demos, and XR-related presentations.</p>
          <List>
            <ListItem>
              <Avatar>
                <Icon>360</Icon>
              </Avatar>
              <ListItemText primary="Vive Demo" secondary="Jan 7, 2019 @ Somewhere 10.0.1.32" />
              <ListItemSecondaryAction>
                <IconButton onClick={this.handleClickOpen}>
                  <Icon>open_in_browser</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <Avatar>
              <Icon>code</Icon>
              </Avatar>
              <ListItemText primary="Workshop" secondary="Jan 9, 2019 @ Somewhere 10.0.1.32" />
              <ListItemSecondaryAction>
                <IconButton onClick={this.handleClickOpen}>
                  <Icon>open_in_browser</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <Avatar>
              <Icon>meeting_room</Icon>
              </Avatar>
              <ListItemText primary="General Meeeting" secondary="July 10, 2019 @ Somewhere 10.0.1.32" />
              <ListItemSecondaryAction>
                <IconButton onClick={this.handleClickOpen}>
                  <Icon>open_in_browser</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <Avatar>
              <Icon>calendar_today</Icon>
              </Avatar>
              <ListItemText primary="Other" secondary="July 11, 2019 @ Somewhere 10.0.1.32" />
              <ListItemSecondaryAction>
                <IconButton onClick={this.handleClickOpen}>
                  <Icon>open_in_browser</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </section>
        <section style={{marginTop:128, marginBottom:128}}>
          <p>Here's a simple demo of displaying a 360 video from NASA's <a style={{color:'#0a9998', textDecoration:'none', borderBottom:'dotted 1px #0a9998'}}href="https://www.youtube.com/watch?v=lil_I_-7aOM" target="_blank" rel="noopener noreferrer">spacewalk training</a>. You can learn to create similar projects in our workshops.</p>
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

Events.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Events);