import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
// import { wait } from "@testing-library/react";
// import "./fetcher2.css";

import CircularProgress from '@material-ui/core/CircularProgress';
export default class Delay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      jobrole: "",
      message: "",
      colorx: "#ff0002"
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
    fetch("https://reqres.in/api/users?delay=7",{
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
      .then((res) => { return res.json() 
        
      })
      
      .then((resJson) => {
        if(resJson.id){
          this.setState({message: "user added successfully"})
        }else{
          this.setState({message: "error occured"})
        }
        this.setState({message: ""})
      })
  }


  render() {
    return (
      <div>
        <TextField 
          onChange={this.handleName} 
          label="enter name"
          variant="filled"
          margin="dense"
          disabled={this.state.message !== "" && this.state.message !== "user added successfully"? 'True': false}
        />
        <TextField 
          onChange={this.handleJob} 
          label="enter job"
          variant="filled"
          margin="dense"
          disabled={this.state.message !== "" && this.state.message !== "user added successfully"? 'True': false}

        />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
          disabled={this.state.message !== "" && this.state.message !== "user added successfully"? 'True': false}
        >
          ADD
          {this.state.message !== "" && this.state.message !== "user added successfully" &&
          <CircularProgress />
          }
        </Button>
        {this.state.message == "user added successfully" &&
          alert("User Add Successfully")
        }
        
  
      </div>

    )
  }
}