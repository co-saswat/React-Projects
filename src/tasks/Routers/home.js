import React, { Component } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import {Redirect } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout = () => {
    return <Redirect to="/"/>;
  };

  render() {
    return (
      <Grid container style={{ padding: 0, margin: 0 }} justify="center">
        <Grid item xs={12} md={6} lg={4}>
          <AppBar position="static" style={{ width:'100%'}}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <span style={{ marginLeft: 30 }}>
                <Typography variant="h6">Home</Typography>
              </span>
              <span style={{ marginLeft: 30 }}>
                <Typography variant="h6">Explore</Typography>
              </span>
              <span style={{ marginLeft: 30 }}>
                <Typography variant="h6">News</Typography>
              </span>
              <span style={{ marginLeft: 40 }}>
                <Button
                  color="inherit"
                  styele={{ marginRight: 58 }}
                  onClick={this.handleLogout}
                >
                  Logout
                </Button>
              </span>
            </Toolbar>
          </AppBar>

          {/* <Link to="/">
            <Button variant="contained">go to Home</Button>
          </Link> */}
        </Grid>
      </Grid>
    );
  }
}
