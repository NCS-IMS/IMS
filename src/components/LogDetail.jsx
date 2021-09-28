import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    display: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            height: '87.9vh'
        }
    },
}
));

function LogDetail() {

    const classes = useStyles();

    return (
        <Paper>
            <div className={classes.display}>
                detail
            </div>
        </Paper>
    )
}

export default LogDetail;
