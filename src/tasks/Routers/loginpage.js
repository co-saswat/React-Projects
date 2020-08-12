import React, { Component } from "react";
import { Grid, Card, TextField, Button, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      login: false,
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
  loginCheck = () => {
    if (this.state.email === "admin"  &&  this.state.password === "admin") {
      this.setState({
        login: true,
        email:"",
        password:"",
      });
    }
  };
  render() {
    if (this.state.login === true) {
      return <Redirect to="get_home" />
    }
    return (
      <Grid container style={{ padding: 0, margin: 0 }} justify="center">
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
        >
          <Card style={{ padding: 30, marginTop: 80 }}>
            <Typography variant="h6" noWrap>
              Login
            </Typography>
            <TextField
              variant="outlined"
              type="text"
              label="email"
              fullWidth={true}
              margin="dense"
              onChange={this.handleEmail}
              value={this.state.email}
            ></TextField>
            <TextField
              variant="outlined"
              type="password"
              label="password"
              fullWidth={true}
              margin="dense"
              onChange={this.handlePassword}
              value={this.state.password}
            ></TextField>
            <Button
              variant="contained"
              fullWidth={true}
              color="secondary"
              onClick={()=> {this.loginCheck()}}
              disabled={
                this.state.email === "" || this.state.password === ""
                  ? true
                  : false
            
              }
              
            >
              LOGIN
            </Button>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
