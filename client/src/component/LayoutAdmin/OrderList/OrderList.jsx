import React, {useEffect, useState} from 'react';
import orderApi from '../../../API/orderAPI';
import clsx from 'clsx';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Slide} from '@material-ui/core';
import {MDBDataTable} from 'mdbreact';
import {useSnackbar} from 'notistack';

import './style.css'

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flex: '1 1 100%',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        minHeight: 0,
        borderRadius: '8px'
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function OrderList() {
    const classes = useStyles();
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [ref, setRef] = useState(0);
    const [idorder, setIdorder] = useState(0);
    const {enqueueSnackbar} = useSnackbar();

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const HuyDon = async (idorder) => {
        try {
            await orderApi.conformCancle(idorder);
            enqueueSnackbar('Hủy đơn hàng thành công', {variant: 'success', autoHideDuration: 2000});
            setRef(e => e + 1);

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000});
        }
    }

    const XacNhan = async (idorder) => {
        try {
            await orderApi.Conform(idorder);
            enqueueSnackbar('Xác nhận đơn hàng thành công', {variant: 'success', autoHideDuration: 2000});
            setRef(e => e + 1);

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000});
        }
    }

    useEffect(() => {
        (async () => {
            const rs = await orderApi.getall();
            setOrder(rs.data)
            setProduct(rs.product)
        })()
    }, [ref]); // eslint-disable-line react-hooks/exhaustive-deps
    const row = [];
    order.forEach(e => (
        row.push({
            address: e.address,
            date: e.dateOrder,
            phone: e.phone,
            total: '$' + e.total,
            username: e.username,
            Email: e.emailPaypal,
            name: e.name,
            idorder: e.idOrder,
            sanpham: <>
                <ol>
                    {product.map((ev, i) => (
                        (ev.idOrder === e.idOrder) && (
                            <li key={i}>{ev.name} - {ev.color} - {ev.size}</li>
                        )
                    ))}

                </ol>
            </>,
            action: <>
                {(e.status === 0) && (
                    <>
                        <Button onClick={() => {
                            handleClickOpen1()
                            setIdorder(e.idOrder)
                        }} variant="contained" color="primary">
                            Xác nhận
                        </Button>
                        <Button onClick={() => {
                            handleClickOpen1()
                            setIdorder(e.idOrder)
                        }} className="m-2" variant="contained" color="secondary">
                            Hủy
                        </Button>
                    </>
                )}
                {(e.status === 3) && (
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleClickOpen()
                            setIdorder(e.idOrder)
                        }}
                        color="secondary">
                        Yêu cầu hủy
                    </Button>
                )}
                {(e.status === 4) && (
                    <Button
                        disabled
                        color="secondary">
                        Đã hủy
                    </Button>
                )}

                {(e.status === 2) && (
                    <Button
                        disabled
                        color="secondary">
                        Đã xác nhận
                    </Button>
                )}
            </>

        })
    ));

    const datatable = {
        columns: [{
            label: "Hóa đơn",
            field: 'idorder'

        }, {
            label: 'Tên',
            field: 'name'
        }, {
            label: 'Username',
            field: 'username'
        }, {
            label: "Sản phẩm",
            field: 'sanpham'
        }, {
            label: 'Số điện thoại',
            field: 'phone'
        }, {
            label: 'Địa chỉ',
            field: 'address'
        }, {
            label: 'Tổng đơn',
            field: 'total'
        }, {
            label: 'Email Paypal',
            field: 'Email'
        }, {
            label: 'Ngày',
            field: 'date'
        }, {
            label: 'Hành động',
            field: 'action'
        }],
        rows: row
    }
    return (
        <div className={clsx(classes.content, 'flex flex-col p-5')}>
            <MDBDataTable
                className="table-order"
                small
                data={datatable}
                entriesLabel='Số dòng'
                entries={5}
                entriesOptions={[5, 10, 20, 50, 100]}
                infoLabel={["Hiển thị", "đến", "của", "dòng"]}
                searchLabel="Tìm kiếm"
                paginationLabel={["Trước", "Sau"]}
                hover
            />
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
                <DialogTitle onClose={handleClose}>
                    Thông báo
                </DialogTitle>
                <DialogContent>
                    <p className="text-primary h3-responsive text-center font-weight-bold" style={{width: '400px'}}>
                        Xác nhận hủy đơn</p>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={() => {
                        handleClose()
                        HuyDon(idorder)
                    }} color="primary">
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open1}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose1}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle onClose={handleClose1}>
                    Thông báo
                </DialogTitle>
                <DialogContent>
                    <p className="text-primary h3-responsive text-center font-weight-bold" style={{width: '400px'}}>
                        Xác nhận đơn hàng</p>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose1} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={() => {
                        handleClose1()
                        XacNhan(idorder)
                    }} color="primary">
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default OrderList;