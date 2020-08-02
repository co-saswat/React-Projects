import React from "react";

export default class MyProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x:0,
            y:0,
            sum: 0
        }
    }

    componentDidMount(){
        this.setState({
            x : this.props.vala,
            y : this.props.valb,
        },function(){
            this.setState({
                sum : this.state.x + this.state.y
            })
        })
    }

    componentDidUpdate(prev){
        if(this.props.vala !== this.state.x){
           this.setState({
            x : this.props.vala
           })
        }
        if(this.props.valb !== this.state.y){
            this.setState({
             y : this.props.valb
            })
         }
    }

    addNumber = (e) =>{
        this.setState({
            sum : parseInt(this.state.x) + parseInt(this.state.y)
        })
    }

    render() {
        return (
            <div>
                sum:{this.state.sum}<br/>
                <button onClick={this.addNumber}>
                    ADD
                </button>
            </div>
        );
    }
}