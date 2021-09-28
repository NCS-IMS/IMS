import React from "react";

import Img from "./../styles/images/hospital.png"

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Paper, Typography, Tab, Tabs, Box, Grid, } from "@material-ui/core";

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
        paddingBottom: theme.spacing(0)
    },
    content: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    textCenter: {
        textAlign: 'center',
    },
    scrollBox: {
        overflowY: 'scroll',
        display: 'block',
        height: '28vh',
    },
    display: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            height: '87.9vh'
        }
    },
    infoTable: {
        width: '100%',
        borderSpacing: '10px',
    },
    dataTable: {
        textAlign: 'center',
        width: '100%',
        borderSpacing: '7px',
    },
    height50: {
        height: '50px',
        verticalAlign: 'middle',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    widthHalf: {
        width: '50%',
    },
    scrollTable: {
        overflowY: 'scroll',
        display: 'block',
        height: '14vh',
    },
}
));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function HospitalInfo() {

    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const modeTab = (e, newValue) => {
        setValue(newValue)
    }

    const modeTabIndex = (index) => {
        setValue(index)
    }

    return (
        <Paper>
            <div className={classes.display}>
                <Typography variant="h5" className={classes.title} color="primary"><Box fontWeight="fontWeightBold">병원 이름 sample</Box></Typography>
                <Grid container spacing={1} className={classes.title}>
                    <Grid item xs={12}>
                        <table className={classes.infoTable}>
                            <thead className={classes.textCenter}>
                                <img
                                    src={Img}
                                    alt=''
                                    width='100%'
                                    height='250px'
                                />
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='2'><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">□ 주소</Box></Typography></td>
                                </tr>
                                <tr>
                                    <td colSpan='2' className={classes.height50}>
                                        <Typography variant="body1">주소 sample sample sample sample sample sample sample sample</Typography>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={classes.infoTable}>
                            <Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">□ 병원 연락처</Box></Typography>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td className={classes.content}><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">병원 대표 연락처</Box></Typography></td>
                                    <td><Typography variant="body1">000 - 0000 - 0000</Typography></td>
                                </tr>
                                <tr>
                                    <td className={classes.content}><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">병원 응급실 연락처</Box></Typography></td>
                                    <td><Typography variant="body1">000 - 0000 - 0000</Typography></td>
                                </tr>
                            </tbody>
                        </table>
                    </Grid>
                    <Grid item xs={12} className={classes.content}>
                        <Tabs value={value} onChange={modeTab} aria-label="simple tabs example" indicatorColor="primary" textColor="primary" variant="fullWidth">
                            <Tab label="수용 가능 인원" {...a11yProps(0)} />
                            <Tab label="가용 가능 장비" {...a11yProps(1)} />
                        </Tabs>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={modeTabIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className={classes.scrollTable}>
                                    <table className={classes.dataTable}>
                                        <tbody>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">응급실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">수술실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">입원실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">중환자실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className={classes.scrollTable}>
                                    <table className={classes.dataTable}>
                                        <tbody>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">응급실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">수술실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">입원실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">중환자실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">중환자실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">중환자실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">중환자실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">중환자실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                            <tr>
                                                <td className={classes.widthHalf}><Typography variant="subtitle1"><Box fontWeight="fontWeightBold">중환자실</Box></Typography></td>
                                                <td className={classes.widthHalf}><Typography variant="body1">7 / 74</Typography></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default HospitalInfo;
