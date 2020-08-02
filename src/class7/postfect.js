import React, { Component } from "react";

export default class PostFetch extends Component {
    constructor(props){
        super(props)

        this.state={
            result : null,
            // name:"",
            // post:""
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users",
        {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name : "Saswat",
                post : "Freelancer"
            })
        })
        .then((res) => res.json())
        .then((resJson)=>{
            console.log(resJson);
            this.setState({
                // result:resJson.data
            })
        })
    }

    render(){
        return(
            <div>
                {/* first name : {this.state.result !== null && this.state.result.first_name} */}
            </div>
        )
    }
}