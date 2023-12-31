import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload)
        },
        removeItem: (state) => {
            state.value.filter((item) => item == action.payload)
        },
        clearCart: (state) => {
            state.value.length == 0
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;