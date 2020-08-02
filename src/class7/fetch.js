import React, { Component } from "react";

export default class Fetch extends Component {
    constructor(props){
        super(props)

        this.state={
            result : null
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users/2")
        .then((res) => res.json())
        .then((resJson)=>{
            console.log(resJson.data);
            this.setState({
                result:resJson.data
            })
        })
    }

    render(){
        return(
            <div>
                first name : {this.state.result !== null && this.state.result.first_name}
            </div>
        )
    }
}