import {createSlice} from '@reduxjs/toolkit';
import Fuse from './Fuse'

export const FuseSlice = createSlice({
    name: 'Fuse',
    initialState: {
        Fuse: Fuse || {},

    },
    reducers: {
        settingTheme: (state, action) => {
            state.Fuse = action.payload
        }
    }
});

const {actions, reducer} = FuseSlice;
export const {settingTheme} = actions;
export default reducer;