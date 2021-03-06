import {
    AppBar,
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Toolbar,
    Typography
} from "@material-ui/core";
import './style.css';
import {makeStyles} from "@material-ui/core/styles";
import FuseAnimateGroup from '../../AnimateGroup/FuseAnimateGroup';
import FuseAnimate from '../../Animate'
import BackupIcon from '@material-ui/icons/Backup';
import React, {useState} from "react";
import clsx from 'clsx';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {changepwd, getProfile, updateProfile, uploadAvt} from "../../../Slice/useSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useSnackbar} from "notistack";
import {useHistory} from "react-router-dom";
import InputText from "../../Form-control/InputText";
import Datepicker from "../../Form-control/Datepicker";
import PasswordField from "../../Form-control/PasswordField";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";


const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#252f3e',
        color: '#fff',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    productImageUpload: {
        transitionProperty: 'box-shadow',
        transitionDuration: theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
    }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Profile() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {register, handleSubmit} = useForm();
    const Username = useSelector(state => state.user.current.username);
    const data = useSelector(state => state.user.profile)
    const username = useSelector(state => state.user.current.username)
    const histoy = useHistory();
    const logedinUser = useSelector(state => state.user.current)
    const isLogIn = !!logedinUser.id;
    const [filename, setFilename] = useState('');
    const [open, setOpen] = useState(false);
    const [openE, setOpenE] = useState(false);
    const [openP, setOpenP] = useState(false);

    if (!isLogIn) {
        histoy.push('/login')
    }
    const form = useForm({
        defaultValues: {
            firstname: data.firstname || '',
            lastname: data.lastname || '',
            gender: data.gender || '',
            birthday: data.birthday || '',
            phone: data.phone || '',
            address: data.address || ''
        },
    });

    const schema = yup.object().shape({
        passwordold: yup.string().required("Vui l??ng nh???p m???t kh???u"),
        passwordnew: yup.string().required("Vui l??ng nh???p m???t kh???u"),
        repwdnew: yup.string().required("Vui l??ng nh???p l???i m???t kh???u").oneOf([yup.ref('passwordnew')], 'M???t kh???u kh??ng kh???p')

    });

    const formP = useForm({
        defaultValues: {
            passwordold: '',
            passwordnew: '',
            repwdnew: ''
        },
        resolver: yupResolver(schema)
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpenP = () => {
        setOpenP(true);
    };

    const handleCloseP = () => {
        setOpenP(false);
    };
    const handleClickOpenE = () => {
        setOpenE(true);
    };

    const handleCloseE = () => {
        setOpenE(false);
    };
    const onSubmit = async (data) => {
        const formData = new FormData();
        console.log(data.avt[0])
        formData.append("avt", data.avt[0]);
        try {
            const action = uploadAvt(formData);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            enqueueSnackbar('C???p nh???t th??nh c??ng', {variant: 'success', autoHideDuration: 2000})
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
            console.log(error.message)
        }
    }

    const onSubmitP = async (value) =>{
        value.username = username;
        try {
            const action = changepwd(value);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction)
            enqueueSnackbar('C???p nh???t th??nh c??ng', {variant: 'success', autoHideDuration: 2000})
            handleCloseP()
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    const onSubmitE = async (value) => {
        try {
            const action = updateProfile(value);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            await unwrapResult(dispatch(getProfile()))
            enqueueSnackbar('?????i m???t kh???u th??nh c??ng', {variant: 'success', autoHideDuration: 2000})
            handleCloseE()
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    return (
        <div className="flex flex-col mt-4 items-center justify-center w-full">
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn"
                }}
            >
                <Card className="mb-16 w-md">
                    <AppBar className={classes.appBar} position="static" elevation={0}>
                        <Toolbar className="pl-16 pr-8">
                            <Typography style={{fontFamily: 'Archivo Narrow', textAlign:'center'}} color="inherit" variant="h4" className="flex-1">
                                Th??ng tin c?? nh??n
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <CardContent className="mx-24">
                        <div className="flex flex-col items-center justify-center w-full">
                            <FuseAnimate animation="transition.expandIn" delay={300}>
                                <Avatar className={classes.large} src={data.avt}/>
                            </FuseAnimate>
                            <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                <Typography 
                                className="md:ml-24 mt-48 font-bold font-arc" variant="h4"
                                            color="inherit">{Username}</Typography>
                            </FuseAnimate>
                        </div>
                        <div className="mb-12">
                            <span className=" font-arc font-bold mb-4 text-15">H???: </span>
                            <span  className="font-arc mb-4 text-15">{data.lastname}</span>
                        </div>
                        <div className="mb-12">
                            <span className="font-arc font-bold mb-4 text-15">T??n: </span>
                            <span  className="font-arc mb-4 text-15">{data.firstname}</span>
                        </div>
                        <div className="mb-12">
                        <span className="font-arc font-bold mb-4 text-15">Gi???i t??nh: </span>
                            <span  className="font-arc mb-4 text-15">{data.gender}</span>
                        </div>
                        <div className="mb-12">
                        <span className="font-arc font-bold mb-4 text-15">Ng??y sinh: </span>
                            <span  className="font-arc mb-4 text-15">{data.birthday}</span>
                        </div>
                        <div className="mb-12">
                        <span className="font-arc font-bold mb-4 text-15">S??? ??i???n tho???i: </span>
                            <span  className="font-arc mb-4 text-15">{data.phone}</span>
                        </div>
                        <div>
                        <span className="font-arc font-bold mb-4 text-15">?????a ch???: </span>
                            <span  className="font-arc mb-4 text-15">{data.address}</span>
                        </div>
                    </CardContent>
                    <CardActions className="m-24">
                        <Button className="mr-8 normal-case" variant="contained" color="primary" aria-label="Follow"
                                onClick={handleClickOpenE}>
                            C???p nh???p th??ng tin c?? nh??n
                        </Button>
                        <Button className="mr-8 normal-case" variant="contained" color="primary" aria-label="Follow"
                                onClick={handleClickOpen}>
                            C???p nh???p th??ng ???nh ?????i di???n
                        </Button>
                        <Button className="mr-8 normal-case" variant="contained" color="primary" aria-label="Follow"
                                onClick={handleClickOpenP}>
                            ?????i m???t kh???u
                        </Button>
                    </CardActions>
                </Card>
            </FuseAnimateGroup>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle onClose={handleClose}>
                    <p className="text-center font-arc text-28">C???p nh???t ???nh ?????i di???n</p>
                    </DialogTitle>
                    <DialogContent>
                        <input
                            className="hidden"
                            id="button-file"
                            type="file"
                            name='avt'
                            ref={register}
                            onChange={(e) => setFilename(e.target.files[0].name)}
                        />
                        <label
                            htmlFor="button-file"
                            className={
                                clsx(
                                    classes.productImageUpload,
                                    "flex items-center justify-center relative w-128 h-128 rounded-4 mx-auto mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                )}
                        >
                            <BackupIcon/>
                        </label>
                        {filename}

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            H???y
                        </Button>
                        <Button onClick={() => {
                            handleClose()
                        }} color="primary" type="submit">
                            ?????ng ??
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

            <Dialog
                open={openE}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseE}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <form onSubmit={form.handleSubmit(onSubmitE)}>
                    <DialogTitle onClose={handleCloseE}>
                       <p className="text-center text-28 font-arc">C???p nh???t th??ng tin c?? nh??n</p>
                    </DialogTitle>
                    <DialogContent className=" w-sm">
                        <InputText className="mb-16" name="lastname" lable="H???" form={form} fullWidth/>
                        <InputText className="mb-16" name="firstname" lable="T??n" form={form} fullWidth/>
                        <div className="radio">
                            <p>Gi???i t??nh:</p>
                            <input className='mt-4' type="radio" id="nam" value="Nam" name="gender"
                                   ref={form.register}/>
                            <label className='m-2' htmlFor="nam">Nam</label>
                            <input type="radio" className='mt-4' id="nu" value="N???" ref={form.register} name="gender"/>
                            <label className='m-2' htmlFor="nu">N???</label>
                        </div>
                        <Datepicker name="birthday" lable="Ng??y sinh" form={form}/>
                        <InputText className="mb-16" name="phone" lable="S??? di???n tho???i" form={form} fullWidth/>
                        <InputText className="mb-16" name="address" lable="?????a ch???" form={form} fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseE} color="primary">
                            H???y
                        </Button>
                        <Button onClick={() => {
                            handleClose()
                        }} color="primary" type="submit">
                            ?????ng ??
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

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
                    <p className="text-center font-arc text-28">?????i m???t kh???u</p>
                    </DialogTitle>
                    <DialogContent>
                    <PasswordField className="mb-5" name="passwordold" lable="M???t kh???u c???" form={formP}/>
                    <PasswordField className="mb-5" name="passwordnew" lable="M???t kh???u m???i" form={formP}/>
                    <PasswordField className="mb-5" name="repwdnew" lable="Nh???p l???i m???t kh???u" form={formP}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseP} color="primary">
                            H???y
                        </Button>
                        <Button 
                         color="primary" type="submit">
                            ?????ng ??
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>

    )
}