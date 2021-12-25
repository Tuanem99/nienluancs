import React from 'react';
import {Button, Card, CardContent, Typography} from '@material-ui/core';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Animate from "../Animate";
import {Link} from 'react-router-dom';
import InputText from '../Form-control/InputText';
import PasswordField from '../Form-control/PasswordField';
import PropTypes from 'prop-types';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
}

function RegisterForm(props) {
    const handleSubmit = async (value) => {
        const {onSubmit} = props;
        if (onSubmit) {

            await onSubmit(value);
        }

    }

    const schema = yup.object().shape({
        username: yup.string()
            .required('Tên đăng nhập không được để trống')
            .min(8, 'Tên đăng nhập ít nhất 8 ký tự'),
        email: yup.string().required("Vui lòng nhập email").email('Email không hơp lệ  '),
        password: yup.string().required("Vui lòng nhập mật khảu").min(8, 'Mật khẩu ít nhất 8 ký tự'),
        repwd: yup.string().required("Vui lòng nhập lại mật khảu").oneOf([yup.ref('password')], 'Mật khẩu không khớp')

    });

    const form = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            repwd: ''

        },
        resolver: yupResolver(schema)
    });


    return (
        <div className="flex flex-col my-2 items-center justify-center w-full">
            <Animate animation="transition.expandIn" delay={300}>
                <Card className="w-full max-w-360  rounded-24 shadow-3">
                    <CardContent className="flex flex-col items-center justify-center px-32">
                        <img className="w-80 m-4" src="assets/images/logos/fuse.svg" alt="logo"/>
                        <Typography style={{fontFamily: 'Archivo Narrow'}} variant="h4" className="my-16">Đăng ký tài khoản</Typography>
                        <form
                            name="RegisterForm"
                            noValidate
                            className="flex flex-col justify-center w-full"
                            onSubmit={form.handleSubmit(handleSubmit)}
                        >
                            <InputText className="mb-5" name="username" lable="Tên đăng nhập" form={form} fullWidth/>
                            <InputText className="mb-5" fullWidth name="email" lable="Email" form={form}/>
                            <PasswordField className="mb-5" name="password" lable="Mật khẩu" form={form}/>
                            <PasswordField className="mb-5" name="repwd" lable="Nhập lại mật khẩu" form={form}/>

                            <Button
                                variant="contained" color="primary"
                                className="w-224 mx-auto mt-16"
                                aria-label="LOG IN"
                                type="submit"
                            >
                                Đăng ký
                            </Button>

                        </form>
                        <div className=" flex flex-col items-center justify-center px-16 pt-2">
                            <span className="font-semibold">Bạn đã có tài khoản?</span>
                            <Link className="font-semibold" to="/login">Đăng nhập</Link>
                        </div>
                    </CardContent>
                </Card>
            </Animate>
        </div>
    )
}

export default RegisterForm;