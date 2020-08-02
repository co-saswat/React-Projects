import React, { Component } from "react";

export default class Todo extends Component{
    constructor(props){
        super(props)

        this.state={
            arr : [],
            tasks : [],
            task : ""
        }
    }

    addTask=(e)=>{
        this.setState({
            task : e.target.value
        })
    }

    btnAddTask=(e)=>{
        var task_in = this.state.tasks
        task_in.push(
            {item: this.state.task,
                arr : task_in,
                task : ""
            }
        )
        this.setState({

        })
    }

    render(){
        return(
            <div>
                <input
                    type = "text" placeholder = "Enter the task" onChange={this.addTask}>
                </input>
                <button
                onClick={this.btnAddTask}>
                    Add Task
                </button>

                {this.state.task}
            </div>
        )
    }
}