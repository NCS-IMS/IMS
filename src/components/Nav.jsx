import React, { useState, useEffect } from 'react';
import Logo from './../styles/images/logo.png'

// material-ui core

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// material-ui icons

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

// components

import KakaoMap from './KakaoMap';
import KakaoMapHospital from './KakaoMapHospital'
import Log from './Log';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Nav(props) {

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false); // 사이드 바 모바일 확인 State
  const [anchorEl, setAnchorEl] = useState(false); // 계정 버튼 내 메뉴 모바일 확인 State

  const [mode, setMode] = useState('Home');

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => { // 메뉴 말고 외부 클릭했을 때 사라지기
    setAnchorEl(null);
  };

  const handleDrawerToggle = (boolean) => { // 모바일 사이드바 메뉴 누를 때 끄기
    setMobileOpen(boolean);
  };

  const modeChanger = (mode) => {
    setMode(mode)
    handleDrawerToggle(false)
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <img
          src={Logo}
          width='100%'
          alt=''
        />
      </div>
      <List>
        <ListItem button key='Home' onClick={()=>modeChanger('Home')} selected={mode === "Home" ? 1 : 0}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button key='Hospital' onClick={()=>modeChanger('Hospital')} selected={mode === "Hospital" ? 1 : 0}>
          <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
          <ListItemText primary='Hospital' />
        </ListItem>
        <ListItem button key='Log' onClick={()=>{modeChanger('Log')}} selected={mode === "Log" ? 1 : 0}>
          <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
          <ListItemText primary='Log'/>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // onClick 이벤트 - 계정 버튼 내 메뉴

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
    </Menu>
  );

  // onClick 이벤트 - 모바일 메뉴 버튼

  const [state, setState] = useState({
    center: {
      lat: 36,
      lng: 127,
    }
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            }
          }))
        }
      )
    }
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={()=>handleDrawerToggle(true)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap>
            NCS-IMS
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          {/* 모바일일 때 사이드바 */}
          <Drawer 
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={()=>handleDrawerToggle(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer} {/* 사이드바 내부 메뉴 */}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          {/* 데스크탑일 때 사이드바 */}
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer} {/* 사이드바 내부 메뉴 */}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {mode === 'Home' &&
          <KakaoMap mode={mode} state={state} setState={setState}/>
        }
        {mode === 'Hospital' &&
          <KakaoMapHospital mode={mode} state={state} setState={setState}/>
        }
        {mode === 'Log' &&
          <Log mode={mode} state={state} setState={setState}/>
        }
      </main>
      {renderMenu}
    </div>
  );
}

export default Nav;