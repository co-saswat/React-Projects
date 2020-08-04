import React, { Component } from "react";
import { Grid, Icon } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

export default class Test extends Component {


    render(){
        return(
            <Grid>
                <Icon>
                    <CloseIcon/>
                </Icon>
            </Grid>
        )
    }
}
