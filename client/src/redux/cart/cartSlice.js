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
        }, 
        setCountItem: (state, action) => {
            state.itemsInCart = state.itemsInCart.map(product => {
                if(product._id == action.payload._id){
                    product.count = action.payload.count
                }
            return product
            })
        }
    }
})

// экспортируем экшен и редьюсер
export const { setItemInCart, deleteItemFromCart, setCountItem } = cartSlice.actions
export default cartSlice.reducer