import React from "react";

import Img from "./../styles/images/images.jpg"

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Paper, Typography, Tab, Tabs, Box, Grid } from "@material-ui/core";

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
        height: '18.5vh',
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

function ReportorInfo() {

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
                <Typography variant="h5" className={classes.title}><Box fontWeight="fontWeightBold">신고자</Box></Typography>
                <Grid container spacing={2} className={classes.title}>
                    <Grid item xs={12}>
                        <div className={classes.textCenter}>
                                <img
                                    src={Img}
                                    alt=''
                                    width='150px'
                                    height='150px'
                                    style={{borderRadius: '70%'}}
                                />
                            </div>
                        <table className={classes.infoTable}>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">이름</Box></Typography></td>
                                    <td><Typography variant="body1">신고자</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">생년월일</Box></Typography></td>
                                    <td><Typography variant="body1">0000년 00월 00일</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">연락처</Box></Typography></td>
                                    <td><Typography variant="body1">000-0000-0000</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">주소</Box></Typography></td>
                                </tr>
                                <tr>
                                    <td colSpan='2' className={classes.height50}>
                                        <Typography variant="body1">충청남도 아산시 배방읍 호서로 79번길 20 호서대학교 제2공학관 421호</Typography>
                                    </td>
                                </tr>
                                <tr>
                                <td><Typography variant="subtitle1" color="primary"><Box fontWeight="fontWeightBold">혈액형</Box></Typography></td>
                                    <td>B</td>
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
                                    없음
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default ReportorInfo;
