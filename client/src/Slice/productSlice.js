import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import productApi from '../API/productAPI';

export const getAlldetail = createAsyncThunk('product/getall', async () => {
    const data = await productApi.getAlls();
    localStorage.setItem('Product', JSON.stringify(data))
    return data;
});

export const createProduct = createAsyncThunk('Product/create', async (payload) => {
    await productApi.create(payload);
    const Product = await productApi.getAll();
    localStorage.setItem('Product', JSON.stringify(Product))
    return Product;
});

export const deleteProduct = createAsyncThunk('product/delete', async (payload) => {
    await productApi.remove(payload);
    const product = await productApi.getAll();
    localStorage.setItem('Product', JSON.stringify(product))
    return product;
});


const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        Product: JSON.parse(localStorage.getItem('Product')) || {}
    },
    reducers: {},
    extraReducers: {
        [getAlldetail.fulfilled]: (state, action) => {
            state.Product = action.payload
        },
        [createProduct.fulfilled]: (state, action) => {
            state.Product = action.payload
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.Product = action.payload
        }
    }
});
const {reducer} = ProductSlice;
export default reducer;
