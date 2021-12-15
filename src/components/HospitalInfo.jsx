import React, { useState } from "react";

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Roadview, CustomOverlayRoadview } from "react-kakao-maps-sdk"

import { Paper, Typography, Tab, Tabs, Box, Grid, Chip, ThemeProvider } from "@material-ui/core";

import SwipeableViews from 'react-swipeable-views'
import PropTypes from 'prop-types';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

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

function HospitalInfo( {markY, markX, title, address, tell, tellED, exist} ) {

    const Content = () => (
        <ThemeProvider theme={theme}>
            <Chip icon={<LocalHospitalIcon/>} label={title} />
        </ThemeProvider>
      )

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
                <Typography variant="h5" className={classes.title} color="primary"><Box fontWeight="fontWeightBold">{title}</Box></Typography>
                <Grid container spacing={1} className={classes.title}>
                    <Grid item xs={12}>
                        <table className={classes.infoTable}>
                            <thead className={classes.textCenter}>
                                <Roadview // 로드뷰를 표시할 Container
                                    position={{
                                        // 지도의 중심좌표
                                        lat: markY,
                                        lng: markX,
                                        radius: 50,
                                    }}
                                    style={{
                                        // 지도의 크기
                                        width: "100%",
                                        height: "250px",
                                    }}
                                >
                                    <CustomOverlayRoadview
                                        position={{
                                            lat: markY,
                                            lng: markX,
                                        }}
                                        isFocus={true}
                                        xAnchor={0.5}
                                        yAnchor={0.5}
                                    >
                                        <Content />
                                    </CustomOverlayRoadview>
                                </Roadview>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan='2'><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">□ 주소</Box></Typography></td>
                                </tr>
                                <tr>
                                    <td colSpan='2' className={classes.height50}>
                                        <Typography variant="body1">{address}</Typography>
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
                                    <td><Typography variant="body1">{tell}</Typography></td>
                                </tr>
                                {/*<tr>
                                    <td className={classes.content}><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">병원 응급실 연락처</Box></Typography></td>
                                    <td><Typography variant="body1">
                                        {exist === 'true'&&
                                            {tellED}
                                        }
                                    </Typography></td>
                                </tr>*/}
                            </tbody>
                        </table>
                    </Grid>
                    <Typography variant="h6" className={classes.title} color="primary"><Box fontWeight="fontWeightBold">응급실 상황</Box></Typography>
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
                                    {exist === 'true'&&
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
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className={classes.scrollTable}>
                                    {exist === 'true'&&
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
                                    }
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
