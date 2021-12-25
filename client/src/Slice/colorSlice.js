import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import colorApi from '../API/colorAPI';

export const getAllColor = createAsyncThunk('Color/getall', async () => {
    const data = await colorApi.getAll();
    localStorage.setItem('Color', JSON.stringify(data))
    return data;
});
export const createColor = createAsyncThunk('Color/create', async (payload) => {
    await colorApi.create(payload);
    const color = await colorApi.getAll();
    localStorage.setItem('Color', JSON.stringify(color))
    return color;
});

export const updateColor = createAsyncThunk('Color/update', async (payload) => {
    await colorApi.update(payload);
    const color = await colorApi.getAll();
    localStorage.setItem('Color', JSON.stringify(color))
    return color;
});

export const deleteColor = createAsyncThunk('Color/delete', async (payload) => {
    await colorApi.remove(payload);
    const color = await colorApi.getAll();
    localStorage.setItem('Color', JSON.stringify(color))
    return color;
});


const colorSlice = createSlice({
    name: 'Color',
    initialState: {
        Color: JSON.parse(localStorage.getItem('Color')) || {}
    },
    reducers: {},
    extraReducers: {
        [getAllColor.fulfilled]: (state, action) => {
            state.Color = action.payload
        },
        [createColor.fulfilled]: (state, action) => {
            state.Color = action.payload
        },
        [updateColor.fulfilled]: (state, action) => {
            state.Color = action.payload
        },
        [deleteColor.fulfilled]: (state, action) => {
            state.Color = action.payload
        }
    }
});
const {reducer} = colorSlice;
export default reducer;
