import React, { Component } from "react";

export default class ArrayOps extends Component{
    constructor(props){
        super(props)

        this.state={
            num1 : 0,
            num2 : 0,
            d : []
        }
    }

    handleNum1=(e)=>{
        this.setState({
            num1 : parseInt(e.target.value)
           
        })
    }
    handleNum2=(e)=>{
        this.setState({
            num2 : parseInt(e.target.value)
           
        })
    }

    addToArray=()=>{
        var k = this.state.d;
        var result=0;
        result = parseInt(this.state.num1) + parseInt(this.state.num2)
       
        // result = parseInt(this.state.num1) * parseInt(this.state.num2)
        // result = parseInt(this.state.num1) / parseInt(this.state.num2)
        k.push(result)
        this.setState({
            d : k,
            k : 0
        },function(){
            result = 0
            result = parseInt(this.state.num1) - parseInt(this.state.num2)
            this.setState({
                d : k,
                k : 0
            })
        })
    }

    render(){
        return(
            <div>
                <input onChange={this.handleNum1} />
                <input onChange={this.handleNum2} />

                <button onClick={this.addToArray}>
                    Append
                </button>

                {
                    this.state.d.toString()
                }
            </div>
        );
    }
}