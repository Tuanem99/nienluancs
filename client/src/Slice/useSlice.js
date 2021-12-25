import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import orderApi from '../API/orderAPI';
import userApi from "../API/userAPI";

export const login = createAsyncThunk(
    'user/login',
    async (payload) =>{
        const data = await userApi.login(payload);
        localStorage.setItem('x-access-token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.USER));

        return data.USER;
    });
export const updateProfile = createAsyncThunk(
    'user/profile',
    async (payload) =>{
        await userApi.update(payload);
    });

export const orderUser = createAsyncThunk(
        'user/order',
        async () =>{
            const data = await orderApi.get()
            localStorage.setItem('order', JSON.stringify(data));
            return data;
        });

export const getProfile = createAsyncThunk(
    'user/getprofile',
    async () =>{
        const data = await userApi.get();
        localStorage.setItem('profile', JSON.stringify(data))
        return data;
});

export const changepwd = createAsyncThunk(
    'user/changepwd',
    async (payload) =>{
        const res = await userApi.changePwd(payload);
        console.log(res)
        return res;
});


export const uploadAvt = createAsyncThunk(
    'user/uploadAvt',
    async (payload) =>{
        const data = await userApi.upload(payload);
        const a = JSON.parse(localStorage.getItem('profile')) || {};
        a.avt = data;
        localStorage.setItem('profile', JSON.stringify(a))
        return data;
    });
const UserSlice = createSlice({
    name:'user',
    initialState: {
        current: JSON.parse(localStorage.getItem('user')) || {},
        profile:  JSON.parse(localStorage.getItem('profile')) || {},
        order:  JSON.parse(localStorage.getItem('order')) || {},
    },
    reducers: {
        Logout(state){
            state.current = {};
            state.profile = {};
            localStorage.removeItem('user');
            localStorage.removeItem('profile');
            localStorage.removeItem('x-access-token');
            localStorage.removeItem('cart');
            localStorage.removeItem('order')
        },
    },
    extraReducers:{
        [login.fulfilled] : (state, action) =>{
            state.current = action.payload;
        },
        [uploadAvt.fulfilled] : (state, action) =>{
            state.profile.avt =  action.payload;
        },
        [getProfile.fulfilled] : (state, action) =>{
            state.profile = action.payload;
        },
        [orderUser.fulfilled] : (state, action) =>{
            state.order = action.payload;
        }

    }
});

const {actions, reducer} = UserSlice;
export const {Logout} = actions;
export default reducer;