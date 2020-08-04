import React, { Component } from "react";
import {
  Grid,
  Card,
  TextField,
  Button,
  Snackbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';


export default class FormVal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      msg: "",
      snackbar: false,
    };
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSnack = () => {
    if (this.state.email === "hero" && this.state.password === "hero1234") {
      this.setState({
        // email:"",
        // password : "",
        snackbar: true,
        msg: "Successfull Login-in",
        
      });
    }else if(this.state.email === "" || this.state.password === ""){
      this.setState({
        snackbar:true,
        msg: "Please Fillup the Fields"
      })
    }else {
      this.setState({
        // email:"",
        // password : "",
        snackbar: true,
        msg: "Failed to Login-in",
      });
    }
  };

  render() {
    return (
      <Grid container style={{ padding: 0, margin: 0 }} justify="center">
        <Grid item xs={12} md={6} lg={4}>
          <Card
            style={{
              padding: 30,
              marginTop: 80,
            }}
          >
            <Typography variant="subtitle1">LOGIN</Typography>

            <TextField
              variant="outlined"
              type="text"
              label="Email"
              fullWidth={true}
              margin="dense"
              onChange={this.handleEmail}
            />
            <TextField
              variant="outlined"
              type="password"
              label="Password"
              fullWidth={true}
              margin="dense"
              onChange={this.handlePassword}
            />

            <Button
              variant="contained"
              fullWidth={true}
              color="primary"
              onClick={() => this.handleSnack()}
            >
              LOGIN
            </Button>
          </Card>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={this.state.snackbar}
          autoHideDuration={6000}
          onClose={() => {
            this.setState({ snackbar: false });
          }}
          message={this.state.msg}
          action={
            <React.Fragment>
              <Button
                color="secondary"
                size="small"
                onClick={() => {
                  this.setState({ snackbar: false });
                }}
              >
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => {
                  this.setState({ snackbar: false });
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Grid>
    );
  }
}
