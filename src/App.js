import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Shell from './Shell';

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Takes the redirect query string created in 404.html, converts it back into
// the correct url, then uses react-router to redirect to the correct url which
// loads the respective routes and components. When there is a fresh page
// load for a path that is defined with frontend routes, GitHub Pages will
// return the custom 404.html page, which then redirects back to just the
// base domain with a query string representing the attempted url, to which
// GitHub Pages returns index.html. The single page react app is loaded,
// this function is run, and the correct route is entered.
function parseRedirectQuery(query) {
  let redirectTo = {}

  if (typeof query.pathname === 'string' && query.pathname !== '') {
    redirectTo.pathname = query.pathname;
  }

  if (typeof query.query === 'string' && query.query !== '') {
    let queryObject = {};
    query.query.split('&').map(q => q.split('=')).forEach(arr => {
      queryObject[arr[0]] = arr.slice(1).join('=');
    })
    redirectTo.query = queryObject;
  }

  if (typeof query.hash === 'string' && query.hash !== '') {
    redirectTo.hash = `#${query.hash}`
  }

  return redirectTo;
}
///////////////////////////////////////////////////////////////////////////////

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
    console.log(parseRedirectQuery(this.props.location.pathname))
    this.setRoute(this.props.location.pathname);
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
