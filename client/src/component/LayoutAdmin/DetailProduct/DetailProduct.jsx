import React, {useEffect, useState} from 'react';
import productAPI from '../../../API/productAPI';
import clsx from 'clsx';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    Slide
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {MDBDataTable} from 'mdbreact';
import Products_has_ColorsAPI from '../../../API/Products_has_ColorsAPI';
import Products_has_SizesAPI from '../../../API/Products_has_SizesAPI';

import {Controller, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import {useSnackbar} from 'notistack';


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
        margin: theme.spacing(2, 2),
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
        margin: theme.spacing(1),
        minWidth: 200,
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DetailProduct() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [color, setColor] = useState([]);
    const Size = useSelector(state => state.Size.Size);
    const Color = useSelector(state => state.Color.Color);
    const [product, setProduct] = useState([])
    const [refesh, setRefesh] = useState(0);
    const {enqueueSnackbar} = useSnackbar();
    const [idcolor, setIdcolor] = useState('');
    const [idsize, setIdsize] = useState('');
    const [idsp, setIdsp] = useState('');
    const [openColor, setOpenColor] = useState(false);
    const [openSize, setOpenSize] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await productAPI.getAlls();

            setProduct(res);
        })()
    }, [])

    const handleCloseSize = () => {
        setOpenSize(false);
    };

    const handleClickOpenSize = () => {
        setOpenSize(true);
    };

    const handleCloseColor = () => {
        setOpenColor(false);
    };

    const handleClickOpenColor = () => {
        setOpenColor(true);
    };


    const formSize = useForm({
        defaultValues: {
            idsize: '',
            idsp: ''
        }
    });

    const formColor = useForm({
        defaultValues: {
            idcolor: '',
            idsp: ''
        }
    });

    const handleSubmit = async (value) => {
        try {
            await Products_has_SizesAPI.create(value);
            enqueueSnackbar('Th??m th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            setRefesh(e => e + 1)
        } catch (error) {
            console.log(error)
            enqueueSnackbar("Size ???? t???n t???i", {variant: 'error', autoHideDuration: 2000})

        }
    }

    const handleSubmitColor = async (value) => {
        try {
            await Products_has_ColorsAPI.create(value);
            enqueueSnackbar('Th??m th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            setRefesh(e => e + 1)
        } catch (error) {
            console.log(error)
            enqueueSnackbar("M??u ???? t???n t???i", {variant: 'error', autoHideDuration: 2000})

        }
    }

    const deletsize = async (idsp, idsize) => {
        const data = {};
        data.idsp = idsp;
        data.idsize = idsize;
        try {
            await Products_has_SizesAPI.remove(data);
            enqueueSnackbar('X??a th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            handleCloseSize()
            setRefesh(e => e + 1)
        } catch (error) {
            console.log(error)
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})

        }
    }

    const deletcolor = async (idsp, idcolor) => {
        const data = {};
        data.idsp = idsp;
        data.idcolor = idcolor;
        try {
            await Products_has_ColorsAPI.remove(data);
            enqueueSnackbar('X??a th??nh c??ng', {variant: 'success', autoHideDuration: 2000});
            handleCloseColor()
            setRefesh(e => e + 1)
        } catch (error) {
            console.log(error)
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})

        }
    }

    useEffect(() => {
        (async () => {
            const res = await Products_has_SizesAPI.getAll();
            setData(res)
            const cl = await Products_has_ColorsAPI.getAll();
            setColor(cl);

        })()
    }, [refesh])
    const row = []
    data.forEach(element => {
        row.push({
            tensize: element.tensize,
            tensp: element.tensp,
            action:
                <>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={() => {
                            handleClickOpenSize()
                            setIdsp(element.idsp)
                            setIdsize(element.idsize)
                        }}
                        className={classes.button}
                        startIcon={<DeleteIcon/>}
                    >
                        X??a
                    </Button>
                </>
        });
    });

    const rowColor = [];

    color.forEach(element => {
        rowColor.push({
            tencolor: element.tencolor,
            tensp: element.tensp,
            action:
                <>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={() => {
                            handleClickOpenColor()
                            setIdsp(element.idsp)
                            setIdcolor(element.idcolor)

                        }}

                        className={classes.button}
                        startIcon={<DeleteIcon/>}
                    >
                        X??a
                    </Button>
                </>
        });
    });


    const datatable = {
        columns: [{
            label: 'T??n s???n ph???m',
            field: 'tensp',
            width: 450,
        },
            {
                label: 'Size',
                field: 'tensize'
            },
            {
                lable: 'H??nh ?????ng',
                field: 'action'
            }
        ],
        rows: row
    }

    const datatableColor = {
        columns: [{
            label: 'T??n s???n ph???m',
            field: 'tensp',
            width: 450,
        },
            {
                label: 'M??u',
                field: 'tencolor'
            },
            {
                lable: 'H??nh ?????ng',
                field: 'action'
            }
        ],
        rows: rowColor
    }

    return (
        <div className={clsx(classes.content, 'w-full flex flex-wrap p-5')}>
            <Paper elevation={1} className="mb-4">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <form onSubmit={formSize.handleSubmit(handleSubmit)}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="loaisp">T??n s???n ph???m</InputLabel>

                                <Controller
                                    as={
                                        <Select
                                            value={formSize.getValues('idsp')}
                                            onChange={(e) => formSize.setValue('idsp', e.target.value)}
                                            labelId="loaisp"
                                        >
                                            {product.map(value =>
                                                <MenuItem value={value.idsp} key={value.idsp}>{value.tensp}</MenuItem>
                                            )}

                                        </Select>
                                    }
                                    name="idsp"
                                    control={formSize.control}
                                />
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="tensize">T??n Size</InputLabel>

                                <Controller
                                    as={
                                        <Select
                                            value={formSize.getValues('idsp')}
                                            onChange={(e) => formSize.setValue('idsp', e.target.value)}
                                            labelId="tensize"
                                        >
                                            {Size.map(value =>
                                                <MenuItem value={value.id} key={value.id}>{value.name}</MenuItem>
                                            )}

                                        </Select>
                                    }
                                    name="idsize"
                                    control={formSize.control}
                                />
                            </FormControl>
                            <div>
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
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={6}>
                        <form onSubmit={formColor.handleSubmit(handleSubmitColor)}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="tensp">T??n s???n ph???m</InputLabel>

                                <Controller
                                    as={
                                        <Select
                                            value={formColor.getValues('idsp')}
                                            onChange={(e) => formColor.setValue('idsp', e.target.value)}
                                            labelId="tensp"
                                        >
                                            {product.map(value =>
                                                <MenuItem value={value.idsp} key={value.idsp}>{value.tensp}</MenuItem>
                                            )}

                                        </Select>
                                    }
                                    name="idsp"
                                    control={formColor.control}
                                />
                            </FormControl>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="tencolor">T??n M??u</InputLabel>

                                <Controller
                                    as={
                                        <Select
                                            value={formColor.getValues('idcolor')}
                                            onChange={(e) => formColor.setValue('idcolor', e.target.value)}
                                            labelId="tencolor"
                                        >
                                            {Color.map(value =>
                                                <MenuItem value={value.id} key={value.id}>{value.name}</MenuItem>
                                            )}

                                        </Select>
                                    }
                                    name="idcolor"
                                    control={formColor.control}
                                />
                            </FormControl>
                            <div>
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
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <MDBDataTable
                        small
                        data={datatable}
                        entriesLabel='S??? d??ng'
                        entries={5}
                        entriesOptions={[5, 10, 20, 50, 100]}
                        infoLabel={["Hi???n th???", "?????n", "c???a", "d??ng"]}
                        searchLabel="T??m ki???m"
                        paginationLabel={["Tr?????c", "Sau"]}
                        hover
                    />
                </Grid>
                <Grid item xs={6}>
                    <MDBDataTable
                        small
                        data={datatableColor}
                        entriesLabel='S??? d??ng'
                        entries={5}
                        entriesOptions={[5, 10, 20, 50, 100]}
                        infoLabel={["Hi???n th???", "?????n", "c???a", "d??ng"]}
                        searchLabel="T??m ki???m"
                        paginationLabel={["Tr?????c", "Sau"]}
                        hover
                    />
                </Grid>
            </Grid>

            <Dialog
                open={openSize}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseSize}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle onClose={handleCloseSize}>
                    Th??ng b??o
                </DialogTitle>
                <DialogContent>
                    <p className="text-primary h3-responsive text-center font-weight-bold" style={{width: '400px'}}>B???n
                        mu???n x??a</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSize} color="primary">
                        H???y
                    </Button>
                    <Button onClick={() => {
                        handleCloseSize()
                        deletsize(idsp, idsize)
                    }} color="primary">
                        ?????ng ??
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openColor}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseColor}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle onClose={handleCloseColor}>
                    Th??ng b??o
                </DialogTitle>
                <DialogContent>
                    <p className="text-primary h3-responsive text-center font-weight-bold" style={{width: '400px'}}>B???n
                        mu???n x??a</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseColor} color="primary">
                        H???y
                    </Button>
                    <Button onClick={() => {
                        handleCloseSize()
                        deletcolor(idsp, idcolor)
                    }} color="primary">
                        ?????ng ??
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DetailProduct;