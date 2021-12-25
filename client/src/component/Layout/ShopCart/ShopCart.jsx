import React, {useState} from 'react';
import {
    AppBar,
    Avatar,
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    IconButton,
    makeStyles,
    Paper,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Typography
} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {cartItemTotal} from '../../../Slice/selecters';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {removeFromCart, setQuantity} from '../../../Slice/cartSlice';
import orderApi from '../../../API/orderAPI';
import {useForm} from 'react-hook-form';
import {useSnackbar} from 'notistack';
import InputText from '../../Form-control/InputText';
import PaypalExpressBtn from 'react-paypal-express-checkout';
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const env = "sandbox";
const currency = "USD";
const client = {
    sandbox: 'AQ1nkzHsIrks4LgYQwXugBKRoLivYBQLKPMBLaOiTP8vKyYq2JTTit13x1U63LrXp28mB99Vnqg73Dg9'
}

function ShopCart() {
    const classes = useStyles();
    const cart = useSelector(state => state.cart.cartItem);
    const iduser = useSelector(state => state.user.current.id)
    const total = useSelector(cartItemTotal);
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const {enqueueSnackbar} = useSnackbar();
    const [ten, setTen] = useState(profile.firstname);
    const [sdt, setSdt] = useState(profile.phone);
    const [diachi, setDiachi] = useState(profile.address);

    const schema = yup.object().shape({
        ten: yup.string()
            .required('Không được để trống'),
        sdt: yup.string()
            .required('Không được để trống'),
        diachi: yup.string()
            .required('Không được để trống'),
    
    
    });

    const form = useForm({
        defaultValues: {
            ten: ten,
            sdt: sdt,
            diachi: diachi
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = value => {
        setTen(value.ten)
        setSdt(value.sdt)
        setDiachi(value.diachi);
        enqueueSnackbar('Cập nhật thông tin thành công', {variant: 'success', autoHideDuration: 2000});

    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onSuccess = async (payment) => {

        const value = {};
        value.iduser = iduser;
        value.phone = sdt;
        value.address = diachi;
        value.total = total;
        value.emailPaypal = payment.email;
        value.name = ten;
        value.cart = cart;

        try {
            await orderApi.create(value);
            enqueueSnackbar('Thanh toán thành công', {variant: 'success', autoHideDuration: 2000});

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})

        }
        handleClose()

    };

    const onCancel = data => {
        // User pressed "cancel" or close Paypal's popup!
        console.log("The payment was cancelled!", data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = err => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };


    const cell = [
        {
            name: "Tên sản phẩm"
        },
        {
            name: "Hình ảnh"
        },
        {
            name: "Size"
        },
        {
            name: "Màu"
        },
        {
            name: "Giá"
        },
        {
            name: "Số lượng"
        },
        {
            name: "Hành động"
        }
    ]

    const cell2 = [
        {
            name: "Tên sản phẩm"
        },
        {
            name: "Size"
        },
        {
            name: "Màu"
        },
        {
            name: "Giá"
        },
        {
            name: "Số lượng"
        },
    ]

    console.log(cart)
    return (
        <div>
            <Paper style={{maxWidth: 1000, margin: '0 auto', paddingBottom: '5rem'}}>
                <TableContainer>
                    <Table>
                        <TableHead style={{backgroundColor: '#252f3e'}}>
                            <TableRow>
                                {cell.map((e, index) => (
                                    <TableCell style={{color: '#fff', textAlign: 'center'}} key={index}>
                                        {e.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((e, index) => (
                                <TableRow key={index}>
                                    <TableCell style={{textAlign: 'center'}}>
                                        {e.nameproduct}
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center'}}>
                                        <Avatar variant="square"
                                                style={{width: '5rem', height: '5rem', borderRadius: '5px'}}
                                                className="my-4"
                                                src={e.src}/>
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center'}}>
                                        {e.size}
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center'}}>
                                        {e.color}
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center'}}>
                                        ${e.gia}
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center'}}>
                                        <IconButton onClick={() => {
                                            dispatch(setQuantity({
                                                idsp: e.idsp,
                                                color: e.color,
                                                size: e.size,
                                                soluong: e.soluong < 2 ? 1 : e.soluong - 1
                                            }))
                                        }}><RemoveCircleOutlineIcon/></IconButton>
                                        <span className="text-10">{e.soluong}</span>
                                        <IconButton onClick={() => {
                                            dispatch(setQuantity({
                                                idsp: e.idsp,
                                                color: e.color,
                                                size: e.size,
                                                soluong: e.soluong + 1
                                            }))
                                        }}><AddCircleOutlineIcon/></IconButton>
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center'}}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => {
                                                dispatch(removeFromCart(e.idsp))
                                            }}

                                        >
                                            xóa
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="m-5">
                    <span className="font-bold text-20">Tổng thanh toán: </span> <span
                    className="font-bold text-20 text-teal">${total}</span>
                </div>
                <div className="m-5">
                    <Button
                        onClick={() => {
                            if (total < 1) {
                                enqueueSnackbar('Giỏ hàng rỗng', {variant: 'error', autoHideDuration: 2000});
                                return;

                            }
                            handleClickOpen()
                        }}
                        variant="contained"
                        color="primary">Thanh toán</Button>
                </div>
            </Paper>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <DialogContent>

                        <Card className="mb-16">
                            <AppBar className={classes.appBar} position="static" elevation={0}>
                                <Toolbar className="pl-16 pr-8">
                                    <Typography color="inherit" variant="h3" className="flex-1 text-center">
                                        Thanh toán
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                        </Card>
                        <InputText name="ten" lable="Tên" form={form}/>
                        <span className="mx-4">
                            <InputText name="sdt" lable="số điện thoại" form={form}/>
                        </span>
                        <InputText fullWidth name="diachi" lable="Địa chỉ" form={form}/>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            type="submit"
                            className="my-2"
                        >Xác nhận thông tin</Button>
                        <Divider/>
                        <TableContainer>
                            <Table>
                                <TableHead style={{backgroundColor: '#252f3e'}}>
                                    <TableRow>
                                        {cell2.map((e, index) => (
                                            <TableCell style={{color: '#fff', textAlign: 'center'}} key={index}>
                                                {e.name}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.map((e, index) => (
                                        <TableRow key={index}>
                                            <TableCell style={{textAlign: 'center'}}>
                                                {e.nameproduct}
                                            </TableCell>
                                            <TableCell style={{textAlign: 'center'}}>
                                                {e.size}
                                            </TableCell>
                                            <TableCell style={{textAlign: 'center'}}>
                                                {e.color}
                                            </TableCell>
                                            <TableCell style={{textAlign: 'center'}}>
                                                ${e.gia}
                                            </TableCell>
                                            <TableCell style={{textAlign: 'center'}}>

                                                <span className="text-10">{e.soluong}</span>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Divider/>
                        <div className="mt-40">
                            <span className="font-bold mb-4 text-15">Tổng thanh toán:  </span>
                            <span className="text-15"> ${total}</span>
                        </div>
                        {(!!form.getValues('ten') && !!form.getValues('sdt')  && !!form.getValues('diachi')) ? (<PaypalExpressBtn
                            env={env}
                            client={client}
                            currency={currency}
                            total={total}
                            onError={onError}
                            onSuccess={onSuccess}
                            onCancel={onCancel}
                        />) : (<div>Nhập thông tin để thanh toán</div>)}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Hủy
                        </Button>
                    </DialogActions>
                </form>

            </Dialog>
        </div>
    );
}

export default ShopCart;