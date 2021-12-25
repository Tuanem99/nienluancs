import UserReducer from '../Slice/useSlice';
import FuseReducer from '../Slice/FuseSlice';
import SizeSlice from '../Slice/sizeSlice';
import colorSlice from '../Slice/colorSlice'
import CategorySlice from '../Slice/categorySlice';
import ProductSlice from '../Slice/productSlice';
import cartSlice from '../Slice/cartSlice'

const {configureStore} = require('@reduxjs/toolkit');
const rootReducer = {
    user: UserReducer,
    Fuse: FuseReducer,
    Size: SizeSlice,
    Color: colorSlice,
    Category: CategorySlice,
    Product:ProductSlice,
    cart: cartSlice
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;