import React, { Component } from 'react';

export default class Color extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bg: null,
            // color: []

        };
    }


    // componentDidMount(){
    //     fetch("http://www.colr.org/json/color/random")
    //     .then(res=>res.json())
    //     .then(resjson=>{
    //         console.log(resjson.colors)
    //     })
    // }


    render() {
        return (
            <div

               >
                <button onClick={(e) => {
                    fetch("http://www.colr.org/json/color/random")
                        .then(res => res.json())
                        .then(resjson => {
                            console.log(resjson.colors)
                            this.setState({
                               bg : resjson.new_color
                            })
                        })
                    }      
                }
                >
                    COLOR
                </button>
                <div
                style={{
                    backgroundColor:'#' + this.state.bg, 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 700,
                    width: '100%'
                   
                }}>

                </div>
            </div>
        )
    }
}