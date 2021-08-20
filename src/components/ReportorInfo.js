import React from "react";

import Img from "./../styles/images/images.png"

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Paper, Typography, Tab, Tabs, Box, Grid, Popover, } from "@material-ui/core";

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
        [theme.breakpoints.up('lg')]: {
            height: '20vh'
        },
        [theme.breakpoints.up('md')]: {
            height: '14vh'
        },
        [theme.breakpoints.up('sm')]: {
            height: '20vh'
        },
        [theme.breakpoints.up('xs')]: {
            height: '20vh'
        }
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
        borderSpacing: '12px',
    },
    popover: {
        pointerEvents: 'none',
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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Paper>
            <div className={classes.display}>
                <Typography variant="h5" className={classes.title}>신고자</Typography>
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
                                    <td><Typography variant="subtitle1">이름</Typography></td>
                                    <td><Typography variant="body1">김득회</Typography></td>
                                </tr><tr>
                                    <td><Typography variant="subtitle1">생년월일</Typography></td>
                                    <td><Typography variant="body1">1997년 12월 13일</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant="subtitle1">연락처</Typography></td>
                                    <td><Typography variant="body1">010 - 4304 - 2134</Typography></td>
                                </tr>
                                <tr>
                                    <td><Typography variant="subtitle1">주소</Typography></td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <Typography variant="body1">충청남도 아산시 배방읍 호서로 79번길 20</Typography>
                                        {/*<Typography variant="body1"
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >충청남도 아산시 배방읍 호서로 79번길 20</Typography>
                                        <Popover
                                            id="mouse-over-popover"
                                            className={classes.popover}
                                            classes={{
                                            paper: classes.paper,
                                            }}
                                            open={open}
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                            }}
                                            onClose={handlePopoverClose}
                                            disableRestoreFocus
                                        >
                                            <Typography variant="body1">충청남도 아산시 배방읍 호서로 79번길 20</Typography>
                                        </Popover>*/}
                                    </td>
                                </tr>
                                <tr>
                                    <td>혈액형</td>
                                    <td>B</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
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
                                    asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className={classes.scrollBox}>
                                    asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
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
