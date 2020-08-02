import React, { Component } from "react";

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            a : "",
            b : "",
            result : []
        }
    }


    render(){
        return(
            <div
            style={
                {
                    marginLeft:50,
                    marginRight:50,
                    marginBottom:50,
                    marginTop:50
                    
                }
            }>
                <input type="text" value={this.state.a} onChange={(e)=>{
                    this.setState({
                        a:e.target.value
                    })
                }} placeholder="Enter Your Email">
                </input><br/>

                <input type="text" value={this.state.b} onChange={(e)=>{
                    this.setState({
                        b:e.target.value
                    })
                }} placeholder="Enter Your Password">
                </input><br/>

                <button onClick={()=>{
                    fetch("https://reqres.in/api/login",
                    {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            Email : this.state.a,
                            Password : this.state.b
                        })
                    }
                    ).then((res)=>res.json())
                    .then((resJson)=>{
                        console.log(resJson)
                        this.setState({
                            result : resJson
                        })
                    })
                }}>Submit</button>

            </div>
        )
    }
} 