import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    maxWidth: 1024,
    margin: '0 auto',
    padding: theme.spacing.unit * 3,
  },
  section: {
    margin: '64px 0',
  },
  heading: {
    color: '#00695c',
  },
  link: {
    color: '#0c897b',
    textDecoration: 'none',
    borderBottom: '1px dotted #a8c4c4',
  },
  spacer: {
    marginTop: 72,
    height: 'calc(100vh - 461px)',
  },
});

class NotFound extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <h1>Not Found</h1>
        <p>The page you were looking is lost in the VR realm!</p>
        <p><a className={classes.link} href="/">Return to reality.</a></p>

        <div className={classes.spacer}></div>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NotFound);
