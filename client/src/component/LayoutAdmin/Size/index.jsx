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
import {createSize, deleteSize, updateSize} from '../../../Slice/sizeSlice';
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
    const size = useSelector(state => state.Size.Size);
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
            sizename: ''
        }
    });

    const handleSubmit = async (value) => {
        try {
            const action = createSize(value);
            const rsAction = await dispatch(action);
            unwrapResult(rsAction);
            enqueueSnackbar('Th??m th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            form.reset()

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    const deletSize = async (value) => {
        try {
            const action = deleteSize(value);
            const rsAction = await dispatch(action);
            unwrapResult(rsAction);
            enqueueSnackbar('X??a th??nh c??ng', {variant: 'success', autoHideDuration: 2000});

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    const handleSubmitEdit = async (value) => {
        try {
            value.id = Id;
            const action = updateSize(value);
            const rsAction = await dispatch(action);
            unwrapResult(rsAction);
            enqueueSnackbar('C???p nh???t th??nh c??ng', {variant: 'success', autoHideDuration: 2000});

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }

    }

    const row = []
    size.forEach(element => {
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
                        X??a
                    </Button>
                    <Button
                        variant="contained"
                        olor="primary"
                        size="small"
                        onClick={() => {
                            handleClickOpenEdit()
                            setId(element.id)
                            formEdit.setValue("sizename", element.name)
                        }}
                        className={classes.button}
                        startIcon={<EditIcon/>}
                    >
                        S???a
                    </Button>
                </>
        });


    });
    console.log(row)
    const data = {
        columns: [{
            label: 'Size',
            field: 'name',
            width: 450,
        },
            {
                label: 'H??nh ?????ng',
                field: 'action'
            }],
        rows: row
    }
    return (
        <div className={clsx(classes.content, 'flex flex-col w-lg p-5')}>
            <Box m={2}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <InputText name="sizename" lable="Size" form={form}/>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
                        className={classes.buttonadd}
                        endIcon={<AddIcon/>}
                    >
                        Th??m
                    </Button>
                </form>
            </Box>

            <MDBDataTable
                small
                data={data}
                entriesLabel='S??? d??ng'
                entries={5}
                entriesOptions={[5, 10, 20, 50, 100]}
                infoLabel={["Hi???n th???", "?????n", "c???a", "d??ng"]}
                searchLabel="T??m ki???m"
                paginationLabel={["Tr?????c", "Sau"]}
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
                    Th??ng b??o
                </DialogTitle>
                <DialogContent>
                    <p className="text-primary h3-responsive text-center font-weight-bold" style={{width: '400px'}}>B???n
                        mu???n x??a</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        H???y
                    </Button>
                    <Button onClick={() => {
                        handleClose()
                        deletSize(Id)
                    }} color="primary">
                        ?????ng ??
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
                    S???a
                </DialogTitle>
                <form onSubmit={formEdit.handleSubmit(handleSubmitEdit)}>

                    <DialogContent>
                        <InputText name="sizename" lable="Size" form={formEdit}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseEdit} color="primary">
                            H???y
                        </Button>
                        <Button onClick={() => {
                            handleCloseEdit()
                        }} color="primary" type="submit">
                            ?????ng ??
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>

    );
}

export default Color;