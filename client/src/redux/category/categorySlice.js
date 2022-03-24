import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import allEndPoints from "../../services/api/api"

const initialState = {
    catalog: [],
}

export const getCategoryData = createAsyncThunk('category/getCategoryData', async(_, { rejectWithValue, dispatch }) => {
    // Запрос
    const response = await allEndPoints.category.getCategory({})
    // console.log(response.data.categories);
    dispatch(setCategoryData(response.data.categories))
})

export const categorySlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setCategoryData: (state, action) => {
            state.catalog = action.payload
        }
    },
    extraReducers: {
        [getCategoryData.pending]: () => {}, // pending вызывается тогда, когда вызывается getPosts
        [getCategoryData.fulfilled]: () => {}, // fulfilled вызывается тогда, когда запрос прошел успешно
        [getCategoryData.rejected]: () => {}, // rejected вызывается тогда, когда есть ошибка                
    }
})

// экспортируем экшен и редьюсер
export const { setCategoryData } = categorySlice.actions
export default categorySlice.reducer