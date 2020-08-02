import React from "react";

export default class MyFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }



  email = (e) => {
    this.setState({
        email: e.target.value
    })
  }
  password = (e) => {
    this.setState({
        password: e.target.value
    })
  }



  login = (e) => {
    fetch("https://reqres.in/api/login", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })

      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.token)
        if (resJson.error === "Missing email or username") {
          alert("Email ID  Missing");
        }
        else if (resJson.error === "Missing password") {
          alert("Password  Missing");
        }
        else if (resJson.token === undefined) {
          alert("Email ID Or Password Incorrect");
        }  
        else {
          alert("Login Success");
        }     
      })
      console.log(this.state.email)
      console.log(this.state.password)
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <input
          type="text"
          placeholder="enter your email"
          onChange={this.email}
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={this.password}
        />
        <button
          onClick={() => {
            this.login()
          }}
        >
          Login
        </button>
        
        </div>
    )
  }
}