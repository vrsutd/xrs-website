import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Shell from './Shell';

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#262626',
    },
    secondary: { 
      main: '#0a9998',
    }, 
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {

  },
});

class App extends Component {
  state = {
    route: '',
  };

  componentWillMount() {
    // Init route
    this.setRoute(this.props.location.pathname);
    var pathname = getParameterByName('pathname');
    if (pathname == null) {
      this.setRoute(this.props.location.pathname);
    } else {
      window.location.assign(pathname);
      window.location.replace(process.env.PUBLIC_URL + pathname);
      this.setRoute(pathname);
    }
  }

  componentDidUpdate(prevProps) {
    // Route changed
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setRoute(this.props.location.pathname);
    }
  }

  setRoute = (route) => {
    this.setState({ route: route.substring(1) });
  }

  render() {
    const { route } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Shell route={route}/>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(props => <App {...props} />);
