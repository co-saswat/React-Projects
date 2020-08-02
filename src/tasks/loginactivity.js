import React, { Component } from "react";
export default class LoginPass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      email1:"",
    };
  }

  handleEmail = (e) => {
    this.setState(
      {
        email: e.target.value,
      },
      function () {
      }
    );
  };

  handlePassword = (e) => {
    this.setState(
      {
        password: e.target.value,
      },
      function () {
      }
    );
  };

  handleLogin = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email1: this.state.email,
        password:this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.token)
        if(resJson.withStatus('200')){
          if(this.email1==="eve.holt@reqres.in" && this.password==="cityslicka"){
        
            alert("Login Sucessfull!!!");
           }else{
             alert("Login Failed!!!")
           }
        }
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          onChange={() => this.handleEmail}
        />
        <input
          type="password"
          onChange={() => this.handlePassword}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
