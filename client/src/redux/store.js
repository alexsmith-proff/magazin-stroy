import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import cartSlice from "./cart/cartSlice"
import categorySlice from "./category/categorySlice"
import userSlice from "./user/userSlice"

// Объединяем несколько редюсеров
const rootReducer = combineReducers({
    user: userSlice,
    category: categorySlice,
    cart: cartSlice,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)