import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#0a9998',
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#0a9998',
    },
  },
  notchedOutline: {},
  cssRoot: {
    color: theme.palette.getContrastText('#0a9998'),
    backgroundColor: '#0a9998',
    '&:hover': {
      backgroundColor: '#0a9998',
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Join extends Component {  

  state = {
    firstName: '',
    lastName: '',
    email: '',
  };

  _firstNameChanged(e) {
    // TODO: validation
    this.setState({firstName: e.target.value});
  }

  _lastNameChanged(e) {
    // TODO: validation
    this.setState({lastName: e.target.value});
  }

  _emailChanged(e) {
    // TODO: validation
    this.setState({email: e.target.value});
  }

  _submitForm(firstName, lastName, email) {
    // TODO: validation
    console.log('submit', firstName, lastName, email);
    
    const user = 'a8f6b82436084eb8621d6fa3c';
    const formId = 'e5ff7c2067';
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://vrsutd.us19.list-manage.com/subscribe/post?' + `u=${user}&id=${formId}`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log(xhr.response);
      }
    }

    xhr.send(null);
  }

  render() {
    const { classes } = this.props;

    return(
      <div>
        <h1>Join</h1>
        <p>Join our mailing list for announcements on upcoming events and exciting updates about XRS!</p>

          <iframe width="100%" height="700" frameBorder="0" src="https://vrsutd.us19.list-manage.com/subscribe/post?u=a8f6b82436084eb8621d6fa3c&id=e5ff7c2067"></iframe>

          {/* <TextField
            label="First name"
            required
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={this._firstNameChanged.bind(this)}
          />
          <TextField
            label="Last name"
            required
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={this._lastNameChanged.bind(this)}
          />
          <TextField
            label="Email"
            required
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            type="email"
            name="email"
            autoComplete="email"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={this._emailChanged.bind(this)}
          />
          <div style={{marginTop:48, marginLeft:8}}>
            <Button variant="contained" className={classNames(classes.margin, classes.cssRoot)} 
              onClick={() => this._submitForm(this.state.firstName, this.state.lastName, this.state.email)}>
              Subscribe
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </div> */}
          <div style={{marginBottom:128}}></div>
      </div>
    )
  }
}

Join.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Join);