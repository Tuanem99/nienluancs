import {
    AppBar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    InputLabel,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    Slide,
    TextField,
    Toolbar,
    Typography
} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import productApi from '../../../API/productAPI';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Products_has_SizesAPI from '../../../API/Products_has_SizesAPI';
import Products_has_ColorsAPI from '../../../API/Products_has_ColorsAPI';
import Checkout from '../Checkout/Checkout';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {addtoCart} from '../../../Slice/cartSlice'
import {useSnackbar} from 'notistack';
import {getProfile} from '../../../Slice/useSlice';
import Avatar from "@material-ui/core/Avatar";
import reviewApi from '../../../API/reviewAPI';

const useStyles = makeStyles(theme => ({
    left: {
        width: '250px',
        borderRadius: '8px',
        padding: theme.spacing(0,2)
    },
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

function DetailPage() {
    const schema = yup.object().shape({
        soluong: yup.number().required('Chọn số lượng').min(1, "Số lượng ít nhất là 1").typeError("Vui lòng chọn số lượng"),
        idcolor: yup.string().required("Vui lòng chọn màu"),
        idsize: yup.string().required("Vui lòng chọn size")

    });

    const classes = useStyles();
    const match = useRouteMatch();
    const idsp = match.params.productId;
    const [data, setData] = useState([]);
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(4);
    const {register, handleSubmit} = useForm();
    const [sizename, setSizename] = useState('');
    const [colorname, setColorname] = useState('');
    const [soluong, setSoluong] = useState(1);
    const {enqueueSnackbar} = useSnackbar();
    const iduser = useSelector(state => state.user.current.id);
    const prof = useSelector(state => state.user.profile);
    const [profile, setProfile] = useState(prof)
    const isLogIn = !!iduser;
    const history = useHistory();
    const listorder = useSelector(state => state.user.order.product);
    const [cmt, setcmt] = useState(false)
    const [datacmt, setDatacmt] = useState([]);
    const [ref, setRef] = useState(0);

    useEffect(() => {
        (async () => {
            const res = await productApi.get(idsp);
            setData(res)
            const resSize = await Products_has_SizesAPI.getById(idsp);
            setSize(resSize.data)
            const resColor = await Products_has_ColorsAPI.getById(idsp);
            setColor(resColor.data);
            const resCmt = await reviewApi.get(idsp);
            setDatacmt(resCmt)
            if (isLogIn) {
                await dispatch(getProfile())
                setProfile(JSON.parse(localStorage.getItem('profile')) || '')
            }
            if (!!listorder) {
                listorder.forEach(element => {
                    if (element.idsp === parseInt(idsp)) {
                        setcmt(true);
                        return;
                    }
                });
            }
        })()
    }, [isLogIn, ref]) // eslint-disable-line react-hooks/exhaustive-deps
    const form = useForm({
        defaultValues: {
            idsize: '',
            idsp: '',
            idcolor: '',
            soluong: 1
        },
        resolver: yupResolver(schema)
    });

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onSubmitOne = value => {
        setColorname(value.idcolor)
        setSizename(value.idsize)
        setSoluong(value.soluong)
    }

    const onSubmit = async value => {
        const data = {
            rating: parseInt(value.rating),
            comment: value.title,
            iduser: iduser,
            idproduct: parseInt(idsp)
        }

        await reviewApi.create(data);
        setRef(e => e + 1)
    };
    const dispatch = useDispatch();

    const addCart = () => {
    
        dispatch(addtoCart({
            iduser: iduser,
            idsp: parseInt(idsp),
            name: profile.firstname,
            phone: profile.phone,
            addr: profile.address,
            src: data.img,
            nameproduct: data.tensp,
            size: form.getValues("idsize"),
            color: form.getValues("idcolor"),
            soluong: soluong,
            gia: data.gia
        }));

    }
    return (
        <Box className="w-auto px-64 py-32 mx-auto">
                <Paper elevation={0}>
                    <Grid container className="mx-auto">
                        <Grid item xs={3} className={classes.left}>
                            <CardMedia
                                component="img"
                                image={data.img}
                                style={{borderRadius: '8px'}}
                            />
                        </Grid>
                        <Grid item xs={9} className={classes.right}>
                            <Card className="mb-16 w-full">
                                <AppBar className={classes.appBar} position="static" elevation={0}>
                                    <Toolbar className="pl-16 pr-8">
                                        <Typography color="inherit" variant="h4" className="font-arc flex-1 font-arc">
                                            {data.tensp}
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                                <form onSubmit={form.handleSubmit(onSubmitOne)}>
                                    <CardContent className="mx-24">
                                        <div className="mb-12">
                                            <p className="font-arc font-bold mb-4 text-20">{data.tenloaisp}</p>
                                        </div>
                                        <div className="mb-12">
                                            <p className="font-arc font-bold mb-4 text-20">Mô tả: </p>
                                            <p className="font-arc text-20"> {data.mota}</p>
                                        </div>
                                        <div className="mb-12">
                                            <span className="font-arc font-bold mb-4 text-20">Giá: </span>
                                            <span className="font-arc text-20"> ${data.gia}</span>
                                        </div>
                                        <div
                                            className="mb-12">
                                        <span className="text-20">
                                        <FormControl className={classes.formControl}>
                                             <InputLabel id="tensize">Size</InputLabel>
                                         <Controller
                                             as={
                                                 <>
                                                     <Select
                                                         value={sizename}
                                                         onChange={(e) => {
                                                             // Place your logic here
                                                             form.setValue("idsize", e.target.value)
                                                             setSizename(e.target.value)
                                                         }}
                                                         labelId="tensize"
                                                     >
                                                         {size.map(value =>
                                                             <MenuItem value={value.tensize}
                                                                       key={value.idsize}>{value.tensize}</MenuItem>
                                                         )}

                                                     </Select>
                                                     <FormHelperText error={!!form.errors['idsize']}>
                                                         {form.errors['idsize']?.message}
                                                     </FormHelperText>
                                                 </>
                                             }
                                             error={!!form.errors['idsize']}
                                             name="idsize"
                                             onChange={(e) => {
                                                 // Place your logic here
                                                 setSizename(e.target.value)
                                             }}
                                             control={form.control}

                                         />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                             <InputLabel id="tencolor">Màu</InputLabel>
                                         <Controller
                                             as={
                                                 <>
                                                     <Select
                                                         value={colorname}
                                                         onChange={(e) => {
                                                             setColorname(e.target.value)
                                                             form.setValue('idcolor', e.target.value)
                                                         }}
                                                         labelId="tencolor"
                                                     >
                                                         {color.map(value =>
                                                             <MenuItem value={value.tencolor}
                                                                       key={value.idcolor}>{value.tencolor}</MenuItem>
                                                         )}

                                                     </Select>

                                                     <FormHelperText error={!!form.errors['idcolor']}>
                                                         {form.errors['idcolor']?.message}
                                                     </FormHelperText>

                                                 </>
                                             }
                                             error={!!form.errors['idcolor']}
                                             name="idcolor"
                                             onChange={(e) => setColorname(e.target.value)}
                                             control={form.control}
                                         />
                                </FormControl>
                              <div>

                              <FormControl className={classes.formControl}>
                                        <Controller
                                            as={
                                                <TextField
                                                    variant="outlined"
                                                    id="title1"
                                                    label="Số lượng"
                                                    type="number"
                                                    value={form.getValues("soluong")}
                                                    onChange={(e) => setSoluong(e.target.value)}
                                                />
                                            }
                                            name="soluong"
                                            control={form.control}
                                            error={!!form.errors['soluong']}
                                            helperText={form.errors['soluong']?.message}

                                        />
                                </FormControl>
                              </div>            
                                        </span>
                                        </div>
                                    </CardContent>
                                    <CardActions className="m-12">
                                        <Button
                                            variant="contained"
                                            color="default"
                                            type="submit"
                                            className={classes.button}
                                            onClick={() => {
                                                if (!isLogIn) {
                                                    history.push('/login');
                                                    return;
                                                }
                                                    
                                                if (sizename === '' || colorname === '') {
                                                    enqueueSnackbar('Vui lòng chọn nhập tin sản phẩm', {
                                                        variant: 'error',
                                                        autoHideDuration: 2000
                                                    })
                                                } else {
                                                    addCart()
                                                }
                                            }
                                            }
                                            startIcon={<ShoppingCartIcon/>}
                                        >
                                            Thêm vào giỏ hàng
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            type="submit"
                                            onClick={() => {
                                                if (!isLogIn) {
                                                    history.push('/login');
                                                    return;
                                                }
                                                if (form.getValues('idsize') === '' || form.getValues('idsize') === '') {
                                                    enqueueSnackbar('Vui lòng chọn nhập tin sản phẩm', {
                                                        variant: 'error',
                                                        autoHideDuration: 2000
                                                    })
                                                } else {
                                                    handleClickOpen()
                                                }
                                            }}
                                            className={classes.button}
                                            startIcon={<ShoppingBasketIcon/>}
                                        >
                                            Mua ngay
                                        </Button>
                                    </CardActions>
                                </form>
                            </Card>
                            {
                                (cmt) && (
                                    <Card className="mb-16 w-lg">
                                        <CardContent className="mx-16">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <FormControlLabel
                                                    control={
                                                        <>
                                                            <input
                                                                name="rating"
                                                                type="number"
                                                                value={rating}
                                                                ref={register}
                                                                hidden
                                                                readOnly
                                                            />
                                                            <Rating
                                                                name="rating"
                                                                value={rating}
                                                                precision={1}
                                                                onChange={(_, value) => {
                                                                    setRating(value);
                                                                }}
                                                                icon={<StarBorderIcon fontSize="inherit"/>}
                                                            />
                                                        </>
                                                    }
                                                />

                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
                                                    id="title"
                                                    label="Đánh giá"
                                                    name="title"
                                                    autoFocus
                                                    inputRef={register()}
                                                />
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                >
                                                    Thêm
                                                </Button>
                                            </form>
                                        </CardContent>
                                    </Card>

                                )}

                            <Card className="mb-16">
                                <AppBar className={classes.appBar} position="static" elevation={0}>
                                    <Toolbar className="pl-16 pr-8">
                                        <Typography color="inherit" variant="h4" className="font-arc flex-1">
                                            Bình luận đánh giá sản phẩm
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                                <CardContent>
                                    <List>
                                        {datacmt.map((e, index) => (
                                            <>
                                                <ListItem key={index}>
                                                    <ListItemAvatar>
                                                        <Avatar alt="avt" src={e.avt}/>

                                                    </ListItemAvatar>
                                                    <ListItemText primary={<>
                                                        <span className="font-arc" style={{display: 'block',fontWeight:'bold'}}>{e.name}</span>
                                                        <span className="font-arc" >{e.comment}</span>
                                                    </>}
                                                                  secondary={<>

                                                                      <span
                                                                          style={{display: 'block'}}>{e.datecmt}</span>
                                                                      <Rating
                                                                          value={e.rating}
                                                                          name="ratingg"
                                                                          icon={<StarBorderIcon fontSize="inherit"/>}
                                                                      />

                                                                  </>}
                                                    />
                                                </ListItem>
                                                <Divider variant="inset" component="li"/>

                                            </>
                                        ))}
                                    </List>


                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
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
                <DialogContent>
                    <Checkout
                        iduser={iduser}
                        idsp={parseInt(idsp)}
                        name={profile.firstname || ''}
                        phone={profile.phone || ''}
                        addr={profile.address || ''}
                        src={data.img}
                        nameproduct={data.tensp}
                        size={sizename}
                        color={colorname}
                        soluong={soluong}
                        gia={data.gia}
                        closeDialog={handleClose}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Hủy
                    </Button>
                </DialogActions>

            </Dialog>
        </Box>
    );
}

export default DetailPage;