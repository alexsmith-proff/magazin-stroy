import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cart/cartSlice"
import categorySlice from "./category/categorySlice"
import userSlice from "./user/userSlice"
export const store = configureStore({
    reducer: {
        user: userSlice,
        category: categorySlice,
        cart: cartSlice,
    }
})