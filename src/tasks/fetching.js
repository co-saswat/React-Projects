import React, { Component } from "react";



export default class GetFetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: [],
            // bg: null
        }
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2")
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson.data);
                this.setState({
                    result: resJson.data
                })
            })
    }

    render() {
        return (
            <div
            // style={{
            //     backgroundImage: "url(" + this.state.bg + ")",
            //     height: 100,
            //     width: 100,
            //     backgroundSize: "contain"
            // }}
            >
                {
                    this.state.result.map((single, index) => {
                        return (
                            <div
                            // onChange={(e) => {
                            //     if (e.target.value === index) {
                            //         this.setState({
                            //             bg: single.avatar
                            //         })
                            //     }
                            // }}
                            >
                                <ul>
                                    <li>
                                        <view key={index}>
                                            <img src={single.avatar} alt="" style={{
                                                width: 100,
                                                height: 100
                                            }}></img>
                                            Name : {single.first_name} {single.last_name}<br/>
                                            <span style={{
                                                marginLeft : 100
                                            }}>
                                                Email : {single.email}
                                            </span>
                                        </view>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}