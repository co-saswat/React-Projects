// import React, { Component } from "react";

// export default class ArrayOp extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             // d: [],
//             arr: [
//                 {
//                     rollno: 1,
//                     name: "Saswat",
//                     address: [
//                         {
//                             city: "dhenkanal",
//                             state: "odisha"
//                         }
//                     ]
//                 },
//                 {
//                     rollno: 2,
//                     name: "Animesh",
//                     address: [
//                         {
//                             city: "Angul",
//                             state: "odisha"
//                         }
//                     ]
//                 },
//                 {
//                     rollno: 3,
//                     name: "Abhisek",
//                     address: [
//                         {
//                             city: "Bhubaneshwar",
//                             state: "odisha"
//                         }
//                     ]
//                 },
//                 {
//                     rollno: 4,
//                     name: "Vikas",
//                     address: [
//                         {
//                             city: "Cuttack",
//                             state: "odisha"
//                         }
//                     ]
//                 }
//             ]
//         }
//     }

//     addStudent = () => {
//         var student = this.state.arr
//         student.push({
//             rollno: 5,
//             name: "Spandan",
//             address: [
//                 {
//                     city: "Puri",
//                     state: "odisha"
//                 }
//             ]
//         })
//         this.setState({
//             arr: student
//         })
//     }


//     deleteStudent = (index) => {
//         var student = this.state.arr
//         // var d = this.state.d
//         // d.push(student[index])
//         student.splice(index, 1)
//         this.setState({
//             arr: student,
//             // d: d
//         })
//     }

//     render() {
//         return (
//             <div>
//                 Hello World
//                 {
//                     this.state.arr.map((single, index) => {
//                         return (
//                             <div>
//                                 {single.rollno} - {single.name}  {single.address.map((s) => {
//                                     return (
//                                         <div>
//                                             {s.city} , {s.state}
//                                         </div>
//                                     )
//                                 })}
//                                 <button onClick={() => {
//                                     this.deleteStudent(index)
//                                 }}>
//                                     Delete Student
//                                 </button>
//                                 <br/>
//                                 {/* {single} */}
//                             </div>
//                         );
//                     })
//                 }

//                 <button onClick={this.addStudent}>
//                     Add Student
//                 </button>
//                 <br />


//             </div>
//         );
//     }
// }

import React, { Component } from "react";
// import image from "./image.jpg";

export default class ArrayOp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgcol: "",
            value: ""
            // image: image
            // backgroundImage1: "uri('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg')",
            // backgroundImage2: "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg')",
            // backgroundImage3: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png')",
            // backgroundImage4: "url('https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg')"
        };
    }

    handleBgCol = (e) => {
        // var bg1 = this.state.backgroundImage1
        // var bg2 = this.state.backgroundImage2
        // var bg3 = this.state.backgroundImage3
        // var bg4 = this.state.backgroundImage4
        this.setState({ value: e.target.value }, function () {
            //     if (this.state.value === "1") {
            //   this.setState({
            //      bgimg: "#F7190B",

            //   });
            // }
            // if (this.state.value === "2") {
            //   this.setState({
            //     bgimg: "#EBDA06",
            //   });
            // }
            // if (this.state.value === "3") {
            //   this.setState({
            //     bgimg: "#4BEB06",
            //   });
            // }
            // if (this.state.value === "4") {
            //   this.setState({
            //     bgimg: "#1C07C9",
            //   });
            // }

            this.state.value === "1" ?
                this.setState({
                    // bgimg:console.log(bg1)
                    bgcol: "#4BEB06"
                }) :
                this.state.value === "2" ?
                    this.setState({
                        bgcol: "#1C07C9"
                    }) :
                    this.state.value === "3" ?
                        this.setState({
                            bgcol: "#EBDA06"
                        }) :
                        this.state.value === "4" &&
                        this.setState({
                            bgcol: "#F7190B"
                        })
        }

        )
    }
    render() {
        return (
            <div style={{ textAlign: "center", fontSize: 30 }}>
                <h3>Change the Background Color</h3>
                <div style={{
                    backgroundColor: this.state.bgcol,
                    // backgroundImage: this.state.backgroundImage1,
                    backgroundSize: "cover",
                    width: 1200,
                    height: 500,
                    borderRadius: 15,
                    marginLeft: 40,
                }}>
                    <select onClick={this.handleBgCol}>
                        <option value="1">Green</option>
                        <option value="2">Blue</option>
                        <option value="3">Yellow</option>
                        <option value="4">Red</option>
                    </select>

                    <br />


                </div>
            </div>
        );
    }
}