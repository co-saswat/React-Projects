import React, { Component } from "react";
import { Grid, } from "@material-ui/core";
import { BrowserRouter, Route,} from "react-router-dom";
import LoginPage from "./loginpage";
import HomePage from "./home";

export default class LoginRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
    };
  }
  render() {
    return (
      <Grid container>
        <BrowserRouter>
          <Route exact path="/" component={LoginPage} />
          <Route path="/get_home" component={HomePage} />
          {/* <Link to="/get_home">
            <Button variant="contained">go to Home</Button>
          </Link> */}

         
        </BrowserRouter>
      </Grid>
    );
  }
}
