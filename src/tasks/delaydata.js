import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';
// import { wait } from "@testing-library/react";
// import "./fetcher2.css";

import CircularProgress from '@material-ui/core/CircularProgress';
export default class DelayData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      post: "",
      message: ""
      
    }
  }

  // componentDidMount() {
  //   fetch("https://reqres.in/api/users?page=2&delay=7")
  //     .then((res) => { return res.json() })
  //     .then((resJson) => {
  //       console.log(resJson);
  //       this.setState({
  //         result: resJson.data
  //       })
  //     })
  // }

  handleName = (e) => {
    this.setState({
      fullname: e.target.value
    })
  }

  handleJob = (e) => {
    this.setState({
      jobrole: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      message: this.state.fullname
    })
    fetch("https://reqres.in/api/users?delay=7", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.fullname,
        job: this.state.jobrole
      })
    })
      .then((res) => {
        return res.json()

      })

      .then((resJson) => {
        if (resJson.id) {
          this.setState({ message: "user added successfully" })
        } else {
          this.setState({ message: "error occured" })
        }
        this.setState({ message: "" })
      })
  }
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
        }} className="mydiv">
        <TextField
          onChange={this.handleName}
          label="enter name"
          margin="dense"
          style={
            {
              display: 'inline',
              margin: 10,

            }
          }
          disabled={this.state.message !== "" && this.state.message !== "user added successfully" ? 'True' : false}
        /><br/>
        <TextField
          onChange={this.handleJob}
          label="enter job"
          margin="dense"
          style={
            {
              display: 'inline',
              margin: 10
            }
          }
          disabled={this.state.message !== "" && this.state.message !== "user added successfully" ? 'True' : false}

        /><br/>
        <Button
          variant="contained"
          color="secondary"
          style={
            {
              display: 'inline',
              margin: 10
            }
          }
          onClick={this.handleClick}
          disabled={this.state.message !== "" && this.state.message !== "user added successfully" ? 'True' : false}
        >
          ADD
          
        </Button><br/>

        {this.state.message !== "" && this.state.message !== "user added successfully" &&
            <CircularProgress color="secondary"/>
          }


        {this.state.message === "user added successfully" &&
          alert("User Add Successfully")
        }
      </div>

    )
  }
}