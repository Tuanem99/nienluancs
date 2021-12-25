// import './style.css'
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MDBDataTable} from 'mdbreact';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Slide} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useForm} from 'react-hook-form';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import {unwrapResult} from '@reduxjs/toolkit';
import {createColor, deleteColor, updateColor} from '../../../Slice/colorSlice';
import {useSnackbar} from 'notistack';
import InputText from "../../Form-control/InputText";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
    table: {
        minWidth: 700,
    },
    button: {
        margin: theme.spacing(1),
    },
    buttonadd: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(2)
    },
    content: {
        display: 'flex',
        flex: '1 1 100%',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        minHeight: 0,
        borderRadius: '8px'
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Color() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {enqueueSnackbar} = useSnackbar();
    const color = useSelector(state => state.Color.Color);
    const [Id, setId] = useState('');
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };
    const form = useForm({
        defaultValues: {
            Colorname: ''
        }
    });

    const formEdit = useForm({
        defaultValues: {
            Colorname: ''
        }
    });

    const handleSubmit = async (value) => {
        try {
            const action = createColor(value);
            const rsAction = await dispatch(action);
            unwrapResult(rsAction);
            enqueueSnackbar('Thêm thành công', {variant: 'success', autoHideDuration: 2000});
            form.reset()

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    const deleteCL = async (value) => {
        try {
            const action = deleteColor(value);
            const rsAction = await dispatch(action);
            unwrapResult(rsAction);
            enqueueSnackbar('Xóa thành công', {variant: 'success', autoHideDuration: 2000});

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    const handleSubmitEdit = async (value) => {
        try {
            value.id = Id;
            const action = updateColor(value);
            const rsAction = await dispatch(action);
            unwrapResult(rsAction);
            enqueueSnackbar('Cập nhật thành công', {variant: 'success', autoHideDuration: 2000});

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    const row = []
    color.forEach(element => {
        row.push({
            name: element.name,
            action:
                <>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={() => {
                            handleClickOpen()
                            setId(element.id)
                        }}
                        className={classes.button}
                        startIcon={<DeleteIcon/>}
                    >
                        Xóa
                    </Button>
                    <Button
                        variant="contained"
                        olor="primary"
                        size="small"
                        onClick={() => {
                            handleClickOpenEdit()
                            setId(element.id)
                            formEdit.setValue("Colorname", element.name)
                        }}
                        className={classes.button}
                        startIcon={<EditIcon/>}
                    >
                        Sửa
                    </Button>
                </>
        });


    });
    console.log(row)
    const data = {
        columns: [{
            label: 'Màu',
            field: 'name',
            width: 450,
        },
            {
                label: 'Hành động',
                field: 'action'
            }],
        rows: row
    }
    return (
        <div className={clsx(classes.content, 'flex flex-col w-lg p-5')}>
            <Box m={2}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <InputText name="Colorname" lable="Màu" form={form}/>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
                        className={classes.buttonadd}
                        endIcon={<AddIcon/>}
                    >
                        Thêm
                    </Button>
                </form>
            </Box>

            <MDBDataTable
                small
                data={data}
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
                        deleteCL(Id)
                    }} color="primary">
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openEdit}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseEdit}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >

                <DialogTitle>
                    Sửa
                </DialogTitle>
                <form onSubmit={formEdit.handleSubmit(handleSubmitEdit)}>

                    <DialogContent>
                        <InputText name="Colorname" lable="Màu" form={formEdit}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseEdit} color="primary">
                            Hủy
                        </Button>
                        <Button onClick={() => {
                            handleCloseEdit()
                        }} color="primary" type="submit">
                            Đồng ý
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>

    );
}

export default Color;