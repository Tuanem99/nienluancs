import React, {useEffect, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import orderApi from '../../../API/orderAPI';
import {useSnackbar} from 'notistack';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Order() {
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [open, setOpen] = useState(false);
    const [idorder, setIdorder] = useState(0);
    const {enqueueSnackbar} = useSnackbar();
    const [ref, setRef] = useState(0);
    useEffect(() => {
        (async () => {
            const rs = await orderApi.get();
            setOrder(rs.data);
            setProduct(rs.product)
        })
        ()
    }, [ref]) // eslint-disable-line react-hooks/exhaustive-deps
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };


    const HuyDon = async (idorder) => {
        try {
            await orderApi.cancelOrder(idorder);
            enqueueSnackbar('Gửi yêu cầu thành công', {variant: 'success', autoHideDuration: 2000});
            setRef(e => e + 1);

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000});
        }
    }
    const tableHead = [{
        name: 'Đơn hàng'
    },
        {
            name: 'Ngày'
        },
        {
            name: 'Sản Phẩm'
        },
        {
            name: 'Giá'
        },
        {
            name: 'Tổng giá'
        },
        {
            name: 'Trạng thái'
        },
        {
            name: 'Hành động'
        }
    ]
    return (
        <div>
            <Paper style={{maxWidth: 1200, margin: '0 auto', paddingBottom: '5rem'}}>
                <TableContainer>
                    <Table>
                        <TableHead style={{backgroundColor: '#252f3e'}}>
                            <TableRow>
                                {tableHead.map((e, index) => (
                                    <TableCell style={{color: '#fff', textAlign: 'center', fontSize: '1rem'}}
                                               key={index}>
                                        {e.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.map((e, index) => (
                                <TableRow key={index}>
                                    <TableCell style={{textAlign: 'center', fontSize: '1rem'}}>
                                        {e.idOrder}
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center', fontSize: '1rem'}}>
                                        {e.dateOrder}
                                    </TableCell>
                                    <TableCell style={{fontSize: '1rem'}}>

                                        <ol>
                                            {product.map((ev, i) => (
                                                (ev.idOrder === e.idOrder) && (
                                                    <li key={i}>{ev.name} - {ev.color} - {ev.size}</li>
                                                )
                                            ))}

                                        </ol>
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center', fontSize: '1rem'}}>

                                        <ol>
                                            {product.map((ev, i) => (
                                                (ev.idOrder === e.idOrder) && (
                                                    <li key={i}>${ev.Price}</li>
                                                )
                                            ))}

                                        </ol>
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center', fontSize: '1rem'}}>
                                        ${e.total}
                                    </TableCell>
                                    <TableCell style={{textAlign: 'center', fontSize: '1rem'}}>
                                        {(e.status === 0) && (
                                            <div className="font-bold text-10 text-teal">
                                                Đang chờ xác nhận
                                            </div>
                                        )}

                                        {(e.status === 3) && (
                                            <div className="font-bold text-10 text-gray-500 ">
                                                Đang yêu cầu hủy
                                            </div>
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


                                    </TableCell>
                                    <TableCell>
                                        {(e.status === 0) && (
                                            <Button
                                                onClick={() => {
                                                    setIdorder(e.idOrder);
                                                    handleClickOpen();
                                                }}
                                                variant="contained"
                                                color="secondary">hủy</Button>
                                        )}
                                        {(e.status === 3) && (
                                            <Button variant="contained" disabled>
                                                Yêu cầu hủy
                                            </Button>
                                        )}
                                    </TableCell>
                                </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
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
                    <p className="text-primary h3-responsive text-center font-weight-bold" style={{width: '400px'}}>Bạn
                        muốn hủy đơn hàng. Đơn hàng sẽ được hoàn tiền trong 3 ngày.</p>
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
        </div>
    );
}

export default Order;