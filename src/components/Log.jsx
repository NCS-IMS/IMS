import React, { useState } from "react";

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

function Log( { mode, data, callLog } ) {
    
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
                <Paper>
                    <div className={classes.display}>
                        <LogTable data={data} callLog={callLog}/>
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
