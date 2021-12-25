import React from 'react';
import {useDispatch} from 'react-redux';
import {getProfile, login, orderUser} from '../../Slice/useSlice'
import {unwrapResult} from '@reduxjs/toolkit';
import {useSnackbar} from "notistack";
import LoginForm from '../LoginForm';
import {useHistory} from "react-router-dom";

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();


    const handleSubmit = async (values) => {
        try {
            const rs = await dispatch(login(values));
            unwrapResult(rs)
            await dispatch(getProfile());
            await dispatch(orderUser())
            history.go(0)
            history.goBack()

        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error', autoHideDuration: 2000})
        }

    }
    return (
        <>
            <LoginForm onSubmit={handleSubmit}/>
        </>
    )
}

export default Login;