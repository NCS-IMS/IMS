import React, { useState } from 'react';
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
import Badge from '@material-ui/core/Badge';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// material-ui icons

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

// components

import KakaoMap from './KakaoMap';

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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false); // 알림 계정 모바일 확인 State

  const [mode, setMode] = useState('Home');

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => { // 메뉴 말고 외부 클릭했을 때 사라지기
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
        <ListItem button key='Log' onClick={()=>modeChanger('Log')} selected={mode === "Log" ? 1 : 0}>
          <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
          <ListItemText primary='Log' />
        </ListItem>
        <ListItem button key='Graph' onClick={()=>modeChanger('Graph')} selected={mode === "Graph" ? 1 : 0}>
          <ListItemIcon><InsertChartIcon /></ListItemIcon>
          <ListItemText primary='Graph' />
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

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
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
            onClose={handleDrawerToggle}
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
        {(mode === 'Home' || mode ==='Hospital') &&
          <KakaoMap mode={mode}/>
        }
        {mode === 'Log' &&
          <div>
            log
          </div>
        }
        {mode === 'Graph' &&
          <div>
            graph
          </div>
        }
      </main>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Nav;