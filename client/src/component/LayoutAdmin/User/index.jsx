import React, {useEffect, useState} from 'react';
import userApi from '../../../API/userAPI';
import clsx from 'clsx';
import {Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Slide} from '@material-ui/core';
import {MDBDataTable} from 'mdbreact';
import DeleteIcon from '@material-ui/icons/Delete';
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


function User(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [Id, setId] = useState('');
    const [open, setOpen] = useState(false);
    const {enqueueSnackbar} = useSnackbar();
    const [rf, setRf] = useState(0);
    useEffect(() => {
        (async () => {
            const res = await userApi.getAll();
            setData(res)
        })()
    }, [rf]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const deletUser = async value => {
        try {
            await userApi.remove(value);
            setRf(e => e + 1)
            enqueueSnackbar('Xóa thành công', {variant: 'success', autoHideDuration: 2000});
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }
    }
    const row = []

    data.forEach(element => {
        row.push({
            username: element.username,
            email: element.email,
            lastname: element.lastname,
            firstname: element.firstname,
            gender: element.gender,
            birthday: element.birthday,
            phone: element.phone,
            avt:
                <>
                    <Avatar src={element.avt} variant="rounded"/>
                </>
            ,
            address: element.address,
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
                </>
        })
    })

    const dataTable = {
        columns: [{
            label: 'Tên đăng nhập',
            field: 'username',
            width: 250
        },
            {
                label: 'Email',
                field: 'email'
            },
            {
                label: 'Họ',
                field: 'lastname'
            },
            {
                label: 'Tên',
                field: 'firstname'
            },
            {
                label: 'Giới tính',
                field: 'gender'
            },
            {
                label: 'Ngày sinh',
                field: 'birthday'
            },
            {
                label: 'Số điện thoại',
                field: 'phone'
            },
            {
                label: 'Ảnh đại diện',
                field: 'avt',
            },
            {
                label: 'Địa chỉ',
                field: 'address'
            },
            {
                label: 'Hành động',
                field: 'action'
            }

        ],
        rows: row
    }


    return (
        <div className={clsx(classes.content, 'flex flex-col p-5')}>
            <MDBDataTable
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
                        deletUser(Id)
                    }} color="primary">
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </div>


    );
}

export default User;