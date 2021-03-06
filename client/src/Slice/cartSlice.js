import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItem: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },
        hiddenMiniCart(state) {
            state.showMiniCart = false;
        },
        addtoCart(state, action) {
            const newItem = action.payload;
            const index = state.cartItem.findIndex((x) => x.idsp === newItem.idsp && x.size === newItem.size && x.color === newItem.color)
            if (index >= 0) {
                state.cartItem[index].soluong += newItem.soluong
                const a = JSON.parse(localStorage.getItem('cart'))
                a[index].soluong += newItem.soluong
                localStorage.setItem('cart', JSON.stringify(a))
            } else {
                state.cartItem.push(newItem)
                const a = JSON.parse(localStorage.getItem('cart')) || [];
                a.push(newItem)
                localStorage.setItem('cart', JSON.stringify(a))
            }

        },
        setQuantity(state, action) {
            const {idsp, soluong, color, size} = action.payload;
            console.log(action.payload)
            const index = state.cartItem.findIndex(x => x.idsp === idsp && x.color === color && x.size === size)
            if (index >= 0) {
                state.cartItem[index].soluong = soluong;
                const a = JSON.parse(localStorage.getItem('cart'));
                a[index].soluong = soluong;
                localStorage.setItem('cart', JSON.stringify(a))
            }
        },
        removeFromCart(state, action) {
            const idRemove = action.payload;
            state.cartItem = state.cartItem.filter(x => x.idsp !== idRemove);
            const a = JSON.parse(localStorage.getItem('cart'));
            localStorage.setItem('cart', JSON.stringify(a.filter(x => x.idsp !== idRemove)))

        }
    }
})

const {actions, reducer} = cartSlice;
export const {showMiniCart, hiddenMiniCart, setQuantity, removeFromCart, addtoCart} = actions;
export default reducer;