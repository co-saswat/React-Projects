import React, { Component } from "react";
import {
    Grid, Card, TextField, Button,
} from "@material-ui/core";

export default class Demo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handeleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handelePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12} md={6} lg={4}>
                    <Card
                        style={{
                            padding: 30,
                            marginTop: 80
                        }}>
                        <TextField
                            label="email"
                            type="text"
                            variant="outlined"
                            fullWidth={true}
                            margin="dense"
                            onChange={this.handeleEmail}>
                        </TextField>
                        <TextField
                            label="email"
                            type="text"
                            variant="outlined"
                            fullWidth={true}
                            margin="dense"
                            onChange={this.handelePassword}>
                        </TextField>


                        <Button
                            fullWidth={true}
                            variant="contained"
                            color="secondary"
                            disabled={(this.state.email === "" || this.state.password === "") ? true : false}>
                            LOGIN
                        </Button>
                    </Card>
                </Grid>

            </Grid>
        )
    }
}