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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useDispatch, useSelector} from 'react-redux';
import {changepwd, Logout} from '../../Slice/useSlice';
import {Switch, Route, useHistory} from "react-router-dom";
import {Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, ListSubheader, Slide, Typography} from '@material-ui/core';
import NavLinkAdapter from '../NavLinkAdapter';
import Size from './Size';
import Category from './Category';
import Color from './Color';
import Product from './Product';
import {getAllSize} from '../../Slice/sizeSlice';
import {unwrapResult} from '@reduxjs/toolkit';
import {getAllColor} from '../../Slice/colorSlice';
import {getAllCategory} from '../../Slice/categorySlice';
import {getAlldetail} from '../../Slice/productSlice';
import User from './User';
import DetailProduct from './DetailProduct/DetailProduct';
import OrderList from './OrderList/OrderList';
import Review from './Review/Review';
import GamesIcon from '@material-ui/icons/Games';
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import Error404page from '../404/Error404page'
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import PasswordField from '../Form-control/PasswordField';
import { useSnackbar } from 'notistack';
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
        flexGrow: 1,
        padding: theme.spacing(3),
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
        fontFamily: 'Archivo Narrow, Roboto,"Helvetica",Arial,sans-serif !important',
        fontWeight: 500,
        lineHeight: 1.6,
        color: '#fff'
    },
    text: {
        fontSize: '1.5rem',
        fontFamily: 'Archivo Narrow, Roboto,"Helvetica",Arial,sans-serif !important',
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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function Layout() {
    const history = useHistory()
    const classes = useStyles();
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAuth = Boolean(anchorEl);
    const [openP, setOpenP] = useState(false);
    const username = useSelector(state => state.user.current.username);

    useEffect(() => {
        (async () => {
            const size = await getAllSize();
            const rsSize = dispatch(size);
            unwrapResult(rsSize);

            const color = await getAllColor();
            const rsColor = dispatch(color);
            unwrapResult(rsColor);

            const product = await getAlldetail();
            const rsProduct = dispatch(product);
            unwrapResult(rsProduct);

            const category = await getAllCategory()
            const rsCategory = dispatch(category)
            unwrapResult(rsCategory);
        })()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const handleClickOpenP = () => {
        setOpenP(true);
    };

    const handleCloseP = () => {
        setOpenP(false);
    };

    
    const onSubmitP = async (value) =>{
        value.username = username;

        try {
            const action = changepwd(value);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction)
            enqueueSnackbar('Cập nhật thành công', {variant: 'success', autoHideDuration: 2000})
            handleCloseP()
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }
    const schema = yup.object().shape({
        passwordold: yup.string().required("Vui lòng nhập mật khảu"),
        passwordnew: yup.string().required("Vui lòng nhập mật khảu"),
        repwdnew: yup.string().required("Vui lòng nhập lại mật khảu").oneOf([yup.ref('passwordnew')], 'Mật khẩu không khớp')

    });

    const formP = useForm({
        defaultValues: {
            passwordold: '',
            passwordnew: '',
            repwdnew: ''
        },
        resolver: yupResolver(schema)
    });

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
        history.push('/');

    }


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
                        ADMIN DASHBOARD
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
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            {/* <AccountCircle fontSize="large"/> */}
                            <Avatar className={classes.large}/>
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
                            <MenuItem onClick={handleLogout} component='a'>Đăng xuất</MenuItem>
                            <MenuItem onClick={handleClickOpenP}  component='a'>Đổi mật khẩu</MenuItem>
                        </Menu>
                    </div>
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
                    <ListSubheader disableSticky>Người dùng</ListSubheader>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/user"
                        activeClassName="active"
                        className={classes.listItem}
                    >
                        <ListItemText className={classes.text} disableTypography={true} primary="Thông tin người dùng"/>
                    </ListItem>
                    <ListSubheader disableSticky>Sản phẩm</ListSubheader>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/category"
                        activeClassName="active"
                        className={classes.listItem}


                    >
                        <ListItemText className={classes.text} disableTypography={true}
                                      primary="Loại sản phẩm"/>
                    </ListItem>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/size"
                        activeClassName="active"
                        className={classes.listItem}


                    >
                        <ListItemText className={classes.text} disableTypography={true} primary="Danh mục size"/>
                    </ListItem>

                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/color"
                        activeClassName="active"
                        className={classes.listItem}


                    >
                        <ListItemText className={classes.text} disableTypography={true} primary="Danh mục màu"/>
                    </ListItem>

                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/product"
                        activeClassName="active"
                        className={classes.listItem}


                    >
                        <ListItemText className={classes.text} disableTypography={true} primary="Sản phẩm"/>
                    </ListItem>

                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/DetailProduct"
                        activeClassName="active"
                        className={classes.listItem}

                    >
                        <ListItemText className={classes.text} disableTypography={true} primary="Chi tiết sản phẩm"/>
                    </ListItem>
                    <ListSubheader disableSticky>Hóa đơn</ListSubheader>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/order"
                        activeClassName="active"
                        className={classes.listItem}

                    >
                        <ListItemText className={classes.text} disableTypography={true} primary="Hóa đơn "/>
                    </ListItem>
                    <ListSubheader disableSticky>Review</ListSubheader>
                    <ListItem
                        button
                        component={NavLinkAdapter}
                        to="/review"
                        activeClassName="active"
                        className={classes.listItem}

                    >
                        <ListItemText className={classes.text} disableTypography={true} primary="Đánh giá sản phẩm"/>
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <div className="flex flex-col items-center justify-center w-full">
                    <Switch>
                         <Route path="/" exact>
                            <User/>
                        </Route>
                        <Route path="/category">
                            <Category/>
                        </Route>
                        <Route path="/size">
                            <Size/>
                        </Route>
                        <Route path="/color">
                            <Color/>
                        </Route>
                        <Route path="/product">
                            <Product/>
                        </Route>
                        <Route path="/user">
                            <User/>
                        </Route>
                        <Route path="/DetailProduct">
                            <DetailProduct/>
                        </Route>
                        <Route path="/order">
                            <OrderList/>
                        </Route>
                        <Route path="/review">
                            <Review/>
                        </Route>
                        <Route>
                            <Error404page />
                        </Route>
                    </Switch>
                </div>
            </main>
            <Dialog
                open={openP}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseP}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <form onSubmit={formP.handleSubmit(onSubmitP)}>
                    <DialogTitle onClose={handleCloseP}>
                    <p className="text-center font-arc text-28">Đổi mật khẩu</p>
                    </DialogTitle>
                    <DialogContent>
                    <PasswordField className="mb-5" name="passwordold" lable="Mật khẩu củ" form={formP}/>
                    <PasswordField className="mb-5" name="passwordnew" lable="Mật khẩu mới" form={formP}/>
                    <PasswordField className="mb-5" name="repwdnew" lable="Nhập lại mật khẩu" form={formP}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseP} color="primary">
                            Hủy
                        </Button>
                        <Button 
                         color="primary" type="submit">
                            Đồng ý
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
