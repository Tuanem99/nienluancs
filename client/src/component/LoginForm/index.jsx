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


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}

function LoginForm(props) {

    const handleSubmit = async (value) => {
        const {onSubmit} = props;
        if (onSubmit) {

            await onSubmit(value);
            form.reset();
        }
        // console.log('Value ', value);

    }

    const schema = yup.object().shape({
        username: yup.string().required('Tên đăng nhập không được để trống'),
        password: yup.string().required("Vui lòng nhập mật khảu"),

    });
    const form = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema)
    });


    return (
        <div className="flex my-2 flex-col items-center justify-center w-full">

            <Animate animation="transition.expandIn" delay={300}>
                <Card className="w-full max-w-384 rounded-24 shadow-3">
                    <CardContent className="flex flex-col items-center justify-center p-32">
                        <img className="w-96 m-8" src="assets/images/logos/be.PNG" alt="logo"/>
                        <Typography style={{fontFamily: 'Archivo Narrow'}} variant="h4" className="mt-16 mb-16">Đăng nhập</Typography>
                        <form
                            name="loginForm"
                            noValidate
                            className="flex flex-col justify-center w-full"
                            onSubmit={form.handleSubmit(handleSubmit)}
                        >
                            <InputText className="mb-16" name="username" lable="Tên đăng nhập" form={form} fullWidth/>
                            <PasswordField name="password" lable="Mật khẩu" form={form}/>

                            <Button
                                variant="contained" color="primary"
                                className="w-224 mx-auto mt-16"
                                aria-label="LOG IN"
                                type="submit"
                            >
                                Đăng nhập
                            </Button>

                        </form>
                        <div className=" flex flex-col items-center justify-center pt-16 pb-24">
                            <span className="font-medium">Bạn chưa có tài khoản?</span>
                            <Link className="font-medium" to="/register">Tạo tài khoản</Link>
                        </div>
                    </CardContent>
                </Card>
            </Animate>
        </div>
    )
}

export default LoginForm;