import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {fade, makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import GamesIcon from '@material-ui/icons/Games';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile, Logout} from '../../Slice/useSlice';
import {Switch, Route, useHistory} from "react-router-dom";
import {Avatar, Badge, Button, ListSubheader, Typography} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Login from '../Login';
import Register from '../Register';
import Profile from './Profile/Profile';
import FooterLayout from '../Footer'
import ProductList from './ProductList/ProductList';
import NavLinkAdapter from '../NavLinkAdapter';
import DetailPage from './DetailPage/DetailPage';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { cartItemCount } from '../../Slice/selecters';
import { unwrapResult } from '@reduxjs/toolkit';
import ShopCart from './ShopCart/ShopCart';
import Order from './Order/Order';
import Error404page from '../404/Error404page'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#252f3e',
        color: '#fff'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        padding: theme.spacing(2),
        flexGrow: 1,
        paddingBottom: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    logo: {
        fontSize: '1.8571428571428572rem',
        fontFamily: 'Poppins,Roboto,"Helvetica",Arial,sans-serif',
        fontWeight: 500,
        lineHeight: 1.6,
        color: '#fff'
    },
    text: {
        fontSize: '1.5rem',
        fontFamily: 'Poppins,Roboto,"Helvetica",Arial,sans-serif',
        fontWeight: 400,
        lineHeight: 1.6,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    link: {
        color: '#fff !important'
    },
    contentmain: {
        display: 'flex',
        flex: '1 1 100%',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        minHeight: 0,
        // borderRadius   : '8px 8px 0 0',
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        border: '3px solid #464e5b'
    },

    listItem: {
        color: 'inherit!important',
        textDecoration: 'none!important',
        height: 40,
        width: 'calc(100% - 16px)',
        borderRadius: '0 20px 20px 0',
        paddingLeft: 24,
        paddingRight: 12,
        '&.active': {
            backgroundColor: '#252f3e',
            color: theme.palette.secondary.contrastText + '!important',
            pointerEvents: 'none',
            '& .list-item-icon': {
                color: 'inherit !important'
            }
        },
        '& .list-item-icon': {
            fontSize: 16,
            width: 16,
            height: 16,
            marginRight: 16
        }
    }

}));

export default function Layout() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAuth = Boolean(anchorEl);
    const logedinUser = useSelector(state => state.user.current)
    const isLogIn = !!logedinUser.id;
    const Avt = useSelector(state => state.user.profile.avt);
    const cartcount = useSelector(cartItemCount)
    const history = useHistory()
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const handleLogout = () => {
        const action = Logout();
        dispatch(action);
        history.push("/")
    }

     useEffect(() => {
            (async () => {
               if(isLogIn){
                const action1 = getProfile();
                const resultAction1 = await dispatch(action1)
                unwrapResult(resultAction1);
               }
            })()
        }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                color="inherit"
                position="fixed"
                className={clsx(classes.appBar, {[classes.appBarShift]: open,})}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}

                    >
                        <GamesIcon/>
                    </IconButton>
                    <Typography color="inherit" component='a' style={{color: '#fff'}} href='/' variant="h4"
                                className="flex-1 font-arc">
                        BEShop
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Tìm kiếm…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    {!isLogIn && (
                        <Button
                            color="inherit"
                            className={classes.link}
                            component='a'
                            href='/login'
                            endIcon={<ExitToAppIcon className="text-white"/>}
                        >
                            Đăng nhập
                        </Button>
                    )}
                    {isLogIn && (
                        <div>
                             <IconButton component='a' href='/shopcart' style={{color: '#fff'}} aria-label="show 4 new mails" color="inherit">
                                 <Badge badgeContent={cartcount} color="secondary">
                             <ShoppingCartIcon />
          </Badge>
        </IconButton>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar className={classes.large} src={Avt}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                getContentAnchorEl={null}
                                keepMounted
                                open={openAuth}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} style={{color: 'rgba(0, 0, 0, 0.87)'}} component='a' href='/profile'>Thông tin cá nhân</MenuItem>
                                <MenuItem onClick={handleClose} style={{color: 'rgba(0, 0, 0, 0.87)'}} component='a' href='/order'>Hóa đơn</MenuItem>
                                <MenuItem onClick={()=>{
                                    handleLogout()
                                    handleClose()
                                }} component='a'>Đăng xuất</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                className={classes.drawer}
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                       <FormatIndentDecreaseIcon />
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListSubheader disableSticky>Sản phẩm</ListSubheader>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/product"
                        activeClassName="active"
                        className={classes.SelectdlistItem}

                    >
                        <ListItemText className={classes.text} primary="Tất cả sản phẩm"/>
                    </ListItem>

                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/product/94"
                        activeClassName="active"
                        className={classes.SelectedlistItem}

                    >
                        <ListItemText className={classes.text} primary="Áo Thun"/>
                    </ListItem>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/product/154"
                        activeClassName="active"
                        className={classes.SelectedlistItem}

                    >
                        <ListItemText className={classes.text} primary="Áo Sơ Mi"/>
                    </ListItem>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/product"
                        activeClassName="active"
                        className={classes.SelectedlistItem}

                    >
                        <ListItemText className={classes.text} primary="Quần Dài"/>
                    </ListItem>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/product"
                        activeClassName="active"
                        className={classes.SelectedlistItem}

                    >
                        <ListItemText className={classes.text} primary="Quần Short"/>
                    </ListItem>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/product"
                        activeClassName="active"
                        className={classes.SelectedlistItem}

                    >
                        <ListItemText className={classes.text} primary="Áo Khoác"/>
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <Switch>
                    <Route path='/product' exact>
                        <ProductList/>
                    </Route>
                    <Route path='/' exact>
                        <ProductList/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path='/product/:productId'>
                        <DetailPage/>
                    </Route>
                    <Route path='/shopcart'>
                        <ShopCart />
                    </Route>
                    <Route path='/order'>
                        <Order />
                    </Route>
                    <Route>
                            <Error404page />
                        </Route>
                </Switch>
            </main>
            <FooterLayout/>

        </div>
    );
}
