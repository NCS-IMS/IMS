import React, { useState } from "react";

import Img from "./../styles/images/images.jpg"

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Paper, Typography, Tab, Tabs, Box, Grid } from "@material-ui/core";

import { Map, MapMarker } from "react-kakao-maps-sdk"

import SwipeableViews from 'react-swipeable-views'
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(2.5),
    },
    content: {
        padding: theme.spacing(1),
    },
    textCenter: {
        textAlign: 'center',
    },
    scrollBox: {
        overflowY: 'scroll',
        display: 'block',
        height: '15.5vh',
    },
    display: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            height: '87.9vh'
        }
    },
    infoTable: {
        textAlign: 'center',
        width: '100%',
        borderSpacing: '10px',
    },
    height50: {
        height: '50px',
        verticalAlign: 'middle',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    }
}
));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function LogDetail() {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const modeTab = (e, newValue) => {
        setValue(newValue)
    }

    const modeTabIndex = (index) => {
        setValue(index)
    }

    return (
        <Paper>
            <div className={classes.display}>
                <Typography variant="h5" className={classes.title}><Box fontWeight="fontWeightBold">Log</Box></Typography>
                <Grid container spacing={2} className={classes.title}>
                    <Grid item xs={12}>
                        <div className={classes.textCenter}>
                            <Map
                                className="MuiPaper-elevation1"
                                center={{
                                    lat: 36.73649757,
                                    lng: 127.07326128
                                }}
                                style={{ width: "100%", height: "240px", borderRadius: "5px" }}
                                level={4}
                            >
                            <MapMarker
                                position={{
                                    lat: 36.73649757,
                                    lng: 127.07326128
                                }}
                            />
                            </Map>
                        </div>
                        <table className={classes.infoTable}>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">발생 시간</Box></Typography></td>
                                    <td><Typography variant="body1">21년 10월 15일 19:33</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">구조 시간</Box></Typography></td>
                                    <td><Typography variant="body1">21년 10월 15일 19:52</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">발생 상황</Box></Typography></td>
                                    <td><Typography variant="body1">화상</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">발생 위치</Box></Typography></td>
                                </tr>
                                <tr>
                                    <td colSpan='2' className={classes.height50}>
                                        <Typography variant="body1">충청남도 아산시 배방읍 세출리 165</Typography>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Grid>
                    <Grid item xs={12}>
                        <Tabs value={value} onChange={modeTab} aria-label="simple tabs example" indicatorColor="primary" textColor="primary" variant="fullWidth">
                            <Tab label="복용 약물" {...a11yProps(0)} />
                            <Tab label="병력" {...a11yProps(1)} />
                        </Tabs>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={modeTabIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className={classes.scrollBox}>
                                    없음
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className={classes.scrollBox}>
                                    · 2021년 01월 01일 - 맹장 수술
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default LogDetail;
