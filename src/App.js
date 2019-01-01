import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import Home from './Home';
import About from './About';
import Team from './Team';
import Events from './Events';
import Join from './Join';
import Apply from './Apply';
import Contact from './Contact';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  link: {
    textDecoration: 'none',
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    background: '#0a9998',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  state = {
    mobileOpen: false,
    selectedIndex: 0,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    var appbarTitle = 'Extended Reality Society';

    const { classes, theme } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <Icon>menu</Icon>
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                {appbarTitle}
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div>
                  <div className={classes.toolbar} />
                  <Divider />
                  <List>
                    <Link className={classes.link} to="/about/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 0}
                        onClick={event => this.handleListItemClick(event, 0)}
                      >
                        <ListItemIcon><Icon>description</Icon></ListItemIcon>
                        <ListItemText primary="About" />
                      </ListItem>
                    </Link>
                    <Link className={classes.link} to="/team/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 1}
                        onClick={event => this.handleListItemClick(event, 1)}
                      >
                        <ListItemIcon><Icon>group</Icon></ListItemIcon>
                        <ListItemText primary="Team" />
                      </ListItem>
                    </Link>
                    <Link className={classes.link} to="/events/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 2}
                        onClick={event => this.handleListItemClick(event, 2)}
                      >
                        <ListItemIcon><Icon>event</Icon></ListItemIcon>
                        <ListItemText primary="Events" />
                      </ListItem>
                    </Link>
                  </List>
                  <Divider />
                  <List>
                    <Link className={classes.link} to="/join/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 3}
                        onClick={event => this.handleListItemClick(event, 3)}
                      >
                        <ListItemIcon><Icon>person_add</Icon></ListItemIcon>
                        <ListItemText primary="Join" />
                      </ListItem>
                    </Link>
                    <Link className={classes.link} to="/apply/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 4}
                        onClick={event => this.handleListItemClick(event, 4)}
                      >
                        <ListItemIcon><Icon>edit</Icon></ListItemIcon>
                        <ListItemText primary="Apply" />
                      </ListItem>
                    </Link>
                    <Link className={classes.link} to="/contact/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 5}
                        onClick={event => this.handleListItemClick(event, 5)}
                      >
                        <ListItemIcon><Icon>mail_outline</Icon></ListItemIcon>
                        <ListItemText primary="Contact" />
                      </ListItem>
                    </Link>
                  </List>
                </div>
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <div>
                  <div className={classes.toolbar} />
                  <Divider />
                  <List>
                    <Link className={classes.link} to="/about/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 0}
                        onClick={event => this.handleListItemClick(event, 0)}
                      >
                        <ListItemIcon><Icon>description</Icon></ListItemIcon>
                        <ListItemText primary="About" />
                      </ListItem>
                    </Link>
                    <Link className={classes.link} to="/team/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 1}
                        onClick={event => this.handleListItemClick(event, 1)}
                      >
                        <ListItemIcon><Icon>group</Icon></ListItemIcon>
                        <ListItemText primary="Team" />
                      </ListItem>
                    </Link>
                    <Link className={classes.link} to="/events/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 2}
                        onClick={event => this.handleListItemClick(event, 2)}
                      >
                        <ListItemIcon><Icon>event</Icon></ListItemIcon>
                        <ListItemText primary="Events" />
                      </ListItem>
                    </Link>
                  </List>
                  <Divider />
                  <List>
                    <Link className={classes.link} to="/join/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 3}
                        onClick={event => this.handleListItemClick(event, 3)}
                      >
                        <ListItemIcon><Icon>person_add</Icon></ListItemIcon>
                        <ListItemText primary="Join" />
                      </ListItem>
                    </Link>
                    <Link className={classes.link} to="/apply/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 4}
                        onClick={event => this.handleListItemClick(event, 4)}
                      >
                        <ListItemIcon><Icon>edit</Icon></ListItemIcon>
                        <ListItemText primary="Apply" />
                      </ListItem>
                    </Link>
                    <Link className={classes.link} to="/contact/">
                      <ListItem 
                        button 
                        selected={this.state.selectedIndex === 5}
                        onClick={event => this.handleListItemClick(event, 5)}
                      >
                        <ListItemIcon><Icon>mail_outline</Icon></ListItemIcon>
                        <ListItemText primary="Contact" />
                      </ListItem>
                    </Link>
                  </List>
                </div>
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/team/" component={Team} />
            <Route path="/events/" component={Events} />
            <Route path="/join/" component={Join} />
            <Route path="/apply/" component={Apply} />
            <Route path="/contact/" component={Contact} />
          </main>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
