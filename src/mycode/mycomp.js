import React from "react";
import MyProps from "../class3/myprops";

export default class Test extends React.Component {

    constructor(test) {
        super(test);

        this.state = {
            a: 0,
            b: 0,
            // c: 0
        }
    }

    handleA = (e) => {
        this.setState({
            a: e.target.value
        })
    }

    handleB = (e) =>{
        this.setState({
            b: e.target.value
        })
    }

    // handleC = (e) =>{
    //     this.setState({
    //         c: e.target.value
    //     })
    // }

    // addNumber = (e) =>
    // {
    //     const v = parseInt(this.state.a) + parseInt(this.state.b);
    //     this.setState({
    //         c:v,
    //         a:0,
    //         b:0
    //     })
    // }

    // numberSubstrate = (e) =>{
    //     const v = parseInt(this.state.a) - parseInt(this.state.b);
    //     this.setState({
    //         c:v,
    //         a:0,
    //         b:0
    //     })
    // }
    // numberMultiplication = (e) =>{
    //     const v = parseInt(this.state.a) * parseInt(this.state.b);
    //     this.setState({
    //         c:v,
    //         a:0,
    //         b:0
    //     })
        
    // }
    // numberDivision = (e) =>{
    //     const v = parseInt(this.state.a) / parseInt(this.state.b);
    //     this.setState({
    //         c:v,
    //         a:0,
    //         b:0
    //     })
        
    // }



    render() {
        return (
            <div>
                <input type="number" value={this.state.a} onChange={this.handleA}>
                </input><br/>
                <input type="number" value={this.state.b} onChange={this.handleB}>
                </input><br/>
                {/* <input type="number" value={this.state.c} onChange={this.handleC}>
                </input><br/> */}
                {/* <button onClick={this.addNumber}>
                    ADD
                </button><br/> */}
                {/* <button onClick={this.numberSubstrate}>
                    Substrate
                </button><br/>
                <button onClick={this.numberMultiplication}>
                    Multiple
                </button><br/>
                <button onClick={this.numberDivision}>
                    Divide
                </button><br/> */}
                Value of a : {this.state.a}<br/>
                Value of b : {this.state.b}<br/>
                {/* Value of c : {this.state.c}<br/> */}

                <MyProps
                vala={this.state.a}
                valb={this.state.b}
                />
            </div>

        );
    }
}