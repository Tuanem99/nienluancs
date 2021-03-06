import React, {useEffect, useState} from 'react';
import productApi from '../../../API/productAPI';
import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Slide,
    TextField
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import {MDBDataTable} from 'mdbreact';
import {useSnackbar} from 'notistack';
import {useDispatch, useSelector} from 'react-redux';
import {createProduct, deleteProduct} from '../../../Slice/productSlice';
import {unwrapResult} from '@reduxjs/toolkit';
import {Controller, useForm} from 'react-hook-form';
import BackupIcon from '@material-ui/icons/Backup';
import AddIcon from '@material-ui/icons/Add';
import './style.css'

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
        margin: theme.spacing(1)
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
    formControl: {
        margin: theme.spacing(1, 4),
        minWidth: 120,
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

function Product() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [refesh, setRefesh] = useState(0);
    const [filename, Setfilename] = useState('');
    const [filenameE, SetfilenameE] = useState('');

    const [Id, setId] = useState('');
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openImg, setOpenImg] = useState(false);
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const category = useSelector(state => state.Category.Category);

    const form = useForm({
        defaultValues: {
            cateID: '',
            name: '',
            price: '',
            Descriptions: '',
        }
    });


    const formEdit = useForm({
        defaultValues: {
            cateID: '',
            name: '',
            price: '',
            Descriptions: '',
            id: ''
        }
    });

    const formImg = useForm();

    const handleSubmit = async (value) => {
        try {
            const formDt = new FormData();
            const data = {
                cateID: value.cateID,
                name: value.name,
                price: value.price,
                Descriptions: value.Descriptions,
                gender: value.gender

            }
            formDt.append('data', JSON.stringify(data))
            formDt.append('img', value.img[0])
            const action = createProduct(formDt);
            const rsAction = await dispatch(action);
            unwrapResult(rsAction);
            enqueueSnackbar('Th??m th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            setRefesh(i => i + 1)
            form.reset()

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    const handleSubmitEdit = async (value) => {
        value.id = Id;
        try {
            await productApi.update(value);
            enqueueSnackbar('Th??m th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            setRefesh(i => i + 1)
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }

    const handleSubmitImg = async (value) => {
        const formDt = new FormData();
        formDt.append('img', value.img[0])
        try {
            await productApi.updateImg(Id, formDt);
            enqueueSnackbar('?????i ???nh th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            setRefesh(i => i + 1)
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }

    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseImg = () => {
        setOpenImg(false);
    };

    const handleClickOpenImg = () => {
        setOpenImg(true);
    };


    const deletPd = async (value) => {
        console.log(value);
        try {
            const action = deleteProduct(value);
            const rsAction = await dispatch(action);
            unwrapResult(rsAction);
            enqueueSnackbar('X??a th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            setRefesh(e => e + 1);
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
            console.log(error)
        }
    }

    useEffect(() => {
        (async () => {
            const res = await productApi.getAlls();
            setData(res);
        })()
    }, [refesh]);

    const row = [];

    data.forEach(Element => {
        row.push({
            tensp: Element.tensp,
            mota: Element.mota,
            tenloaisp: Element.tenloaisp,
            gia: Element.gia,
            hinhanh:
                <>
                    <Avatar src={Element.img} variant="rounded"/>
                </>,
            action:
                <>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={() => {
                            handleClickOpen()
                            setId(Element.idsp)
                        }}
                        className={classes.button}
                        startIcon={<DeleteIcon/>}
                    >
                        X??a
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => {
                            handleClickOpenEdit()
                            setId(Element.idsp)
                            formEdit.setValue("cateID", Element.idloaisp)
                            formEdit.setValue("name", Element.tensp)
                            formEdit.setValue("price", Element.gia)
                            formEdit.setValue("Descriptions", Element.mota)

                        }}
                        className={classes.button}
                        startIcon={<EditIcon/>}
                    >
                        S???a
                    </Button>

                    <Button
                        variant='contained'
                        size='small'
                        onClick={() => {
                            handleClickOpenImg()
                            setId(Element.idsp)
                        }}
                        className={classes.button}
                        startIcon={<BackupIcon/>}
                    >
                        ?????i ???nh
                    </Button>

                </>
        })
    })

    const dataTable = {
        columns: [{
            label: 'T??n s???n ph???m',
            field: 'tensp',
            width: 250
        },
            {
                label: 'Lo???i s???n ph???m',
                field: 'tenloaisp'
            },
            {
                label: 'Gi??',
                field: 'gia'
            },
            {
                label: 'H??nh ???nh',
                field: 'hinhanh'
            },
            {
                label: 'M?? t???',
                field: 'mota'
            },
            {
                label: 'H??nh ?????ng',
                field: 'action'
            }
        ],
        rows: row
    }

    return (
        <div className={clsx(classes.content, 'flex flex-col p-5')}>
            <Box m={2}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <p className='mx-5 h3'> Th??m s???n ph???m</p>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Lo???i s???n ph???m</InputLabel>
                        <Controller
                            as={
                                <Select
                                    value={form.getValues('cateID')}
                                    onChange={(e) => form.setValue('cateID', e.target.value)}
                                    labelId="demo-simple-select-label"
                                >
                                    {category.map(value =>
                                        <MenuItem value={value.id} key={value.id}>{value.name}</MenuItem>
                                    )}

                                </Select>
                            }
                            name="cateID"
                            control={form.control}
                        />
                    </FormControl>
                    <Controller
                        className={clsx(classes.formControl, "mr-2")}
                        as={TextField}
                        label="T??n s???n ph???m"
                        name="name"
                        control={form.control}/>
                    <Controller
                        className={clsx(classes.formControl, "mr-2")}
                        as={TextField}
                        label="Gi?? s???n ph???m"
                        name="price"
                        control={form.control}/>

                    <div>

                        <div className='w-512 my-2'>
                            <Controller
                                as={<TextField className="mt-8 mb-16 mx-5" label="M?? t???" type="text" multiline rows={5}
                                               variant="outlined"
                                               fullWidth
                                />}
                                control={form.control}
                                name='Descriptions'
                                className='mx-5'
                            />
                        </div>

                        <input
                            className="hidden"
                            id="button-file"
                            type="file"
                            name='img'
                            ref={form.register}
                            onChange={(e) => Setfilename(e.target.files[0].name)}

                        />
                        <p className='mx-5'> H??nh s???n ph???m</p>
                        <label
                            htmlFor="button-file"
                            className={
                                clsx(
                                    classes.productImageUpload,
                                    "flex items-center justify-center relative w-64 h-64 rounded-4 mx-5 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                )}
                        >
                            <BackupIcon/>
                        </label>
                        {filename}
                    </div>
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
                className="table-product"
                small
                data={dataTable}
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
                        deletPd(Id)
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
                   <p className="text-center text-bold text-20 font-arc">S???a th??ng tin s???n ph???m</p>
                </DialogTitle>
                <form onSubmit={formEdit.handleSubmit(handleSubmitEdit)}>

                    <DialogContent>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Lo???i s???n ph???m</InputLabel>
                            <Controller
                                as={
                                    <Select
                                        value={formEdit.getValues('cateID')}
                                        onChange={(e) => formEdit.setValue('cateID', e.target.value)}
                                        labelId="demo-simple-select-label"
                                    >
                                        {category.map(value =>
                                            <MenuItem value={value.id} key={value.id}>{value.name}</MenuItem>
                                        )}

                                    </Select>
                                }
                                name="cateID"
                                control={formEdit.control}
                            />
                        </FormControl>
                        <Controller
                            className={clsx(classes.formControl, "mr-2")}
                            as={TextField}
                            label="T??n s???n ph???m"
                            name="name"
                            control={formEdit.control}/>
                        <Controller
                            className={clsx(classes.formControl, "mr-2")}
                            as={TextField}
                            label="Gi?? s???n ph???m"
                            name="price"
                            control={formEdit.control}/>


                        <div className='my-2'>
                            <Controller
                                as={<TextField label="M?? t???" type="text" multiline rows={5}
                                               variant="outlined"
                                               fullWidth
                                />}
                                control={formEdit.control}
                                name='Descriptions'
                                className='mx-2'
                            />
                        </div>
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

            <Dialog
                open={openImg}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseImg}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle onClose={handleCloseImg}>
                <p className="text-center text-bold text-20 font-arc">C???p nh???t ???nh s???n ph???m</p>
                </DialogTitle>
                <form onSubmit={formImg.handleSubmit(handleSubmitImg)}>
                    <DialogContent>
                        <input
                            className="hidden"
                            id="button-file1"
                            type="file"
                            name='img'
                            ref={formImg.register}
                            onChange={(e) => SetfilenameE(e.target.files[0].name)}

                        />
                        <p className='text-center'> H??nh s???n ph???m</p>
                        <label
                            htmlFor="button-file1"
                            className={
                                clsx(
                                    classes.productImageUpload,
                                    "flex items-center justify-center relative w-64 h-64 rounded-4 mx-auto mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                )}
                        >
                            <BackupIcon/>
                        </label>
                        {filenameE}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseImg} color="primary">
                            H???y
                        </Button>
                        <Button type="submit" onClick={handleCloseImg} color="primary">
                            ?????ng ??
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>

    );
}

export default Product;