import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Slide} from '@material-ui/core';
import {MDBDataTable} from 'mdbreact';
import reviewApi from '../../../API/reviewAPI';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import {useSnackbar} from 'notistack';

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


function Review() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const {enqueueSnackbar} = useSnackbar();
    const [ref, setRef] = useState(0)

    useEffect(() => {
        (async () => {
            const res = await reviewApi.getAll()
            setData(res)
        })()
    }, [ref]) // eslint-disable-line react-hooks/exhaustive-deps
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const deleteRw = async () => {
        console.log(Id);
        try {
            await reviewApi.delete(Id);
            enqueueSnackbar('Xóa thành công', {variant: 'success', autoHideDuration: 2000});
            setRef(e => e + 1)

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
        handleClose()
    }
    const row = [];
    data.forEach(e => (
        row.push({
            idReviews: e.idReviews,
            iduser: e.iduser,
            idsp: e.idsp,
            comment: e.comment,
            rating: <>
                <Rating
                    value={e.rating}
                    name="ratingg"
                    icon={<StarBorderIcon fontSize="inherit"/>}
                />
            </>,
            username: e.username,
            datecmt: e.datecmt,
            tensp: e.tensp,
            action: <>
                <Button
                    variant='contained'
                    color='secondary'
                    size='small'
                    onClick={() => {
                        setId(e.idReviews)
                        handleClickOpen()
                    }}
                    className={classes.button}
                    startIcon={<DeleteIcon/>}
                >
                    Xóa
                </Button>
            </>
        })
    ));

    const dataTable = {
        columns: [{
            label: 'ID user',
            field: 'iduser'
        },
            {
                label: 'Username',
                field: 'username'
            }, {
                label: 'Tên sản phẩm',
                field: 'tensp'
            }, {
                label: 'Rating',
                field: 'rating'
            }, {
                label: 'Bình luận',
                field: 'comment'
            }, {
                label: 'Ngày',
                field: 'datecmt'
            },
            {
                label: 'Hành động',
                field: 'action'
            }],
        rows: row
    }
    return (
        <div className={clsx(classes.content, 'flex flex-col p-5')}>
            <MDBDataTable
                className="table-review"
                small
                data={dataTable}
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
                    <p className="text-primary h3-responsive text-center font-weight-bold" style={{width: '400px'}}>Bạn
                        muốn xóa</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={() => {
                        handleClose()
                        deleteRw(Id)
                    }} color="primary">
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default Review;