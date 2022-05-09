import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class HomePage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <div >
            <h1>RoboFriends</h1>
            <p>hello there</p>
            <br></br>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>

        </div>


      // <MuiThemeProvider>
      //   <>
      //     <Dialog
      //       open
      //       fullWidth
      //       maxWidth='sm'
      //     >
      //       <center><h2>Period App</h2></center>
      //       <TextField
      //         placeholder="Enter Your Name"
      //         label="Name"
      //         onChange={handleChange('firstName')}
      //         defaultValue={values.firstName}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <TextField
      //         placeholder="Enter Your Age"
      //         label="Age"
      //         onChange={handleChange('lastName')}
      //         defaultValue={values.lastName}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <TextField
      //         placeholder="Enter Your Email"
      //         label="Email"
      //         onChange={handleChange('email')}
      //         defaultValue={values.email}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <Button
      //         color="primary"
      //         variant="contained"
      //         onClick={this.continue}
      //       >Continue</Button>
      //     </Dialog>
      //   </>
      // </MuiThemeProvider>
    );
  }
}

export default HomePage;
