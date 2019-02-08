import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

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
  listContainer: {
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing.unit * 3,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit,
    },
  },
  announcementContainer: {
    minHeight: 155.44,
  },
  eventContainer: {
    minHeight: 204.72,
  },
  link: {
    color: '#0c897b',
    textDecoration: 'none',
    borderBottom: '1px dotted #a8c4c4',
  },
  list: {
    maxHeight: 400,
    overflow: 'scroll',
    padding: 0,
    [theme.breakpoints.down('lg')]: {
      width: 500,
    },
    [theme.breakpoints.down('sm')]: {
      width: 380,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  listItem: {
    padding: 0,
  },
  itemPaper: {
    width: '100%',
    padding: '5px 12px',
    margin: '2px 0',
  },
  itemTitle: {
    marginBottom: 8,
  },
  eventIcon: {
    fontSize: 20,
    marginRight: 7,
  },
  eventInfo: {
    color: '#0a9998',
    marginTop: 4,
    marginBottom: 4,
    display: 'flex',
    alignItems: 'center',
    fontStyle: 'italic',
    fontSize: 14,
  },
  spacer: {
    height: 'calc(100vh - 1039px)',
  },
});

class News extends Component {


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <h1>News</h1>
        <p>Find news and announcements about upcoming events and what's hot in the XR community.</p>

        <section className={classes.section}>
          <h2 className={classes.heading}>Announcements</h2>
          <div className={classNames(classes.listContainer, classes.announcementContainer)}>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Paper className={classes.itemPaper} elevation={1}>
                  <h3>Welcome Sector 5 Digital!</h3>
                  <p>We are proud to sponsored by Sector 5 Digital. Check out their amazing work <a className={classes.link} href="http://www.sector5digital.com/site.html?platform=desktop" target="_blank" rel="noopener noreferrer" >here</a>.</p>
                </Paper>
              </ListItem>
            </List>
          </div>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Events</h2>
          <div className={classNames(classes.listContainer, classes.eventContainer)}>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Paper className={classes.itemPaper} elevation={1}>
                  <h3 className={classes.itemTitle}>Snapchat Lens Studio Workshop</h3>
                  <p className={classes.eventInfo}>
                    <Icon className={classes.eventIcon}>access_time</Icon>
                    Febuary 12th 8:30pm
                  </p>
                  <p className={classes.eventInfo}>
                    <Icon className={classes.eventIcon}>location_on</Icon>
                    <a className={classes.link} href="https://www.utdallas.edu/locator/ECSS_2#!/ECSS_2.415" target="_blank" rel="noopener noreferrer">
                      ECSS 2.415
                    </a>
                  </p>
                  <p>Come join us for our Snapchat lens studio workshop co-hosted by HackUTD!</p>
                </Paper>
              </ListItem>
            </List>
          </div>
        </section>

        <div className={classes.spacer}></div>
      </div>
    );
  }
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(News);
