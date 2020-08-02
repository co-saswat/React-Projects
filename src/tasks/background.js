import React, { Component } from "react";
import heaven from "../styles/images/image_1.jpg";
import vector from "../styles/images/image.jpg";
import rhino from "../styles/images/pic4.jpg";

export default class Background extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bg:null
        }
    }

    render() {
        return (
            <div
            style={
               {
                   backgroundImage : "url("+this.state.bg+")",
                   height :1000, 
                   width :700,
                   backgroundSize:"contain"

               }
            }
            >
                <select
                onChange={
                    (e)=>{
                        if(e.target.value==="1"){
                            this.setState({
                                bg:heaven
                            })
                        }else if(e.target.value==="2"){
                            this.setState({
                                bg:vector
                            })
                        }else{
                            this.setState({
                                bg:rhino
                            })
                        }
                    }
                }>
                
                    <option value="1"> Haven </option>
                    <option value="2">Vector Design</option>
                    <option value="3">Rhino</option>
                </select>
            </div>
        )
    }
}