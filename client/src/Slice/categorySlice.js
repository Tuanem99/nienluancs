import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import categoryAPI from '../API/categoryAPI';

export const getAllCategory = createAsyncThunk('Category/getall', async () => {
    const data = await categoryAPI.getAll();
    localStorage.setItem('Category', JSON.stringify(data))
    return data;
});
export const createCategory = createAsyncThunk('Category/create', async (payload) => {
    await categoryAPI.create(payload);
    const Category = await categoryAPI.getAll();
    localStorage.setItem('Category', JSON.stringify(Category))
    return Category;
});

export const updateCategory = createAsyncThunk('Category/update', async (payload) => {
    await categoryAPI.update(payload);
    const Category = await categoryAPI.getAll();
    localStorage.setItem('Category', JSON.stringify(Category))
    return Category;
});

export const deleteCategory = createAsyncThunk('Category/delete', async (payload) => {
    await categoryAPI.remove(payload);
    const Category = await categoryAPI.getAll();
    localStorage.setItem('Category', JSON.stringify(Category))
    return Category;
});

const CategorySlice = createSlice({
    name: 'Category',
    initialState: {
        Category: JSON.parse(localStorage.getItem('Category')) || {}
    },
    reducers: {},
    extraReducers: {
        [getAllCategory.fulfilled]: (state, action) => {
            state.Category = action.payload
        },
        [createCategory.fulfilled]: (state, action) => {
            state.Category = action.payload
        },
        [updateCategory.fulfilled]: (state, action) => {
            state.Category = action.payload
        },
        [deleteCategory.fulfilled]: (state, action) => {
            state.Category = action.payload
        }
    }
});
const {reducer} = CategorySlice;
export default reducer;
