import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    itemsInCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product._id !== action.payload)
        }
    }
})

// экспортируем экшен и редьюсер
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer