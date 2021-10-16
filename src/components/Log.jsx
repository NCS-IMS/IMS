import React, { useEffect, useState } from "react";

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper } from "@material-ui/core";

import LogTable from "./LogTable";
import LogDetail from "./LogDetail";

const useStyles = makeStyles((theme) => ({
    display: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            height: '87.9vh'
        }
    },
}
));

function Log( { mode } ) {
   
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`http://conative.myds.me:43043/user/log/all?flag=1`)
         .then(response => {
            console.log(response)
         })
     }, [])

    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
                <Paper>
                    <div className={classes.display}>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
                <LogDetail/>
            </Grid>
        </Grid>
    )
}

export default Log;
