import {
    AppBar,
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import InputText from '../../Form-control/InputText';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useSnackbar } from 'notistack';
import orderApi from '../../../API/orderAPI';
import PropTypes from 'prop-types';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

Checkout.propTypes = {
    iduser: PropTypes.number,
    idsp: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    addr: PropTypes.string,
    src: PropTypes.string,
    nameproduct: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    soluong: PropTypes.number,
    gia: PropTypes.number,
    closeDialog: PropTypes.func
};

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

function Checkout(props) {
    const classes = useStyles();
    const {enqueueSnackbar} = useSnackbar();
    const [ten, setTen] = useState(props.name);
    const [sdt, setSdt] = useState(props.phone);
    const [diachi, setDiachi] = useState(props.addr);
    const env = "sandbox";
    const currency = "USD";
    const client = {
        sandbox: 'AQ1nkzHsIrks4LgYQwXugBKRoLivYBQLKPMBLaOiTP8vKyYq2JTTit13x1U63LrXp28mB99Vnqg73Dg9'
    }

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
            ten: props.name,
            sdt: props.phone,
            diachi: props.addr
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = value => {
        setTen(value.ten)
        setSdt(value.sdt)
        setDiachi(value.diachi)
        enqueueSnackbar('Cập nhật thành công', {variant: 'success', autoHideDuration: 2000});

    }
    const onSuccess = async (payment) => {

        const value = {};
        value.iduser = props.iduser;
        value.phone = sdt;
        value.address = diachi;
        value.total = props.gia * props.soluong;
        value.emailPaypal = payment.email;
        value.name = ten;

        const cart = [{
            idsp:  props.idsp,
            color: props.color,
            size: props.size,
            gia: props.gia,
            soluong: props.soluong
        }]

        value.cart = cart;

        try {
            await orderApi.create(value)
            enqueueSnackbar('Thanh toán thành công', {variant: 'success', autoHideDuration: 2000});

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})

        }

        if(props.closeDialog){
            props.closeDialog()
        }

      };
  
      const onCancel = data => {
        // User pressed "cancel" or close Paypal's popup!
        console.log("The payment was cancelled!", data);
        enqueueSnackbar('Bạn đã hủy thanh toán', {variant: 'error', autoHideDuration: 2000});

        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
      };
  
      const onError = err => {
        enqueueSnackbar('Có lỗi xảy ra', {variant: 'error', autoHideDuration: 2000});

        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
      };

    return (
        <div>
            <Card className="mb-16">
                <AppBar className={classes.appBar} position="static" elevation={0}>
                    <Toolbar className="pl-16 pr-8">
                        <Typography color="inherit" variant="h3" className="flex-1 text-center">
                            Thanh toán
                        </Typography>
                    </Toolbar>
                </AppBar>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className="mx-24">
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
                        >Cập nhật thông tin</Button>
                        <Divider/>
                        <Grid container>
                            <Grid item xs={2}>
                                <Avatar variant="square" style={{width: '8rem', height: '8rem'}} className="my-4"
                                        src={props.src}/>
                            </Grid>
                            <Grid item xs={10}>
                                <div className="font-bold mt-4 text-15"> {props.nameproduct} </div>
                                <div>
                                    <span className="font-bold mb-4 text-15">Phân loại: </span>
                                    <span className="text-15"> {props.size}, {props.color}</span>
                                </div>
                                <div>
                                    <span className="font-bold mb-4 text-15">Số lượng: </span>
                                    <span className="text-15"> {props.soluong}</span>
                                </div>
                                <div>
                                    <span className="font-bold mb-4 text-15">Giá: </span>
                                    <span className="text-15"> ${props.gia}</span>
                                </div>
                            </Grid>
                        </Grid>
                        <Divider/>
                        <div className="mt-40">
                            <span className="font-bold mb-4 text-15">Tổng thanh toán:  </span>
                            <span className="text-15"> ${props.gia * props.soluong}</span>

                        </div>

                    </CardContent>
                <CardActions className="m-24">
                       {(!!form.getValues('ten') && !!form.getValues('sdt')  && !!form.getValues('diachi')) ? ( <PaypalExpressBtn
                            env={env}
                            client={client}
                            currency={currency}
                            total={props.gia * props.soluong}
                            onError={onError}
                            onSuccess={onSuccess}
                            onCancel={onCancel}
                    />) : (<div>Nhập thông tin để thanh toán</div>)}
                </CardActions>
        </form>

            </Card>
        </div>
    );
}

export default Checkout;