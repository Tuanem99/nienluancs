import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import sizeApi from '../API/size.API';

export const getAllSize = createAsyncThunk('size/getall', async () => {
    const data = await sizeApi.getAll();
    localStorage.setItem('Size', JSON.stringify(data))
    return data;
});
export const createSize = createAsyncThunk('size/create', async (payload) => {
    await sizeApi.create(payload);
    const Size = await sizeApi.getAll();
    localStorage.setItem('Size', JSON.stringify(Size))
    return Size;
});

export const updateSize = createAsyncThunk('size/update', async (payload) => {
    await sizeApi.update(payload);
    const Size = await sizeApi.getAll();
    localStorage.setItem('Size', JSON.stringify(Size))
    return Size;
});

export const deleteSize = createAsyncThunk('size/delete', async (payload) => {
    await sizeApi.remove(payload);
    const Size = await sizeApi.getAll();
    localStorage.setItem('Size', JSON.stringify(Size))
    return Size;
});


const SizeSlice = createSlice({
    name: 'size',
    initialState: {
        Size: JSON.parse(localStorage.getItem('Size')) || {}
    },
    reducers: {},
    extraReducers: {
        [getAllSize.fulfilled]: (state, action) => {
            state.Size = action.payload
        },
        [createSize.fulfilled]: (state, action) => {
            state.Size = action.payload
        },
        [updateSize.fulfilled]: (state, action) => {
            state.Size = action.payload
        },
        [deleteSize.fulfilled]: (state, action) => {
            state.Size = action.payload
        }
    }
});
const {reducer} = SizeSlice;
export default reducer;
