import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import allEndPoints from "../../services/api/api"

const initialState = {
    user: {}
}

export const getUserData = createAsyncThunk('user/getUserData', async(_, { rejectWithValue, dispatch }) => {
    // Запрос
    const response = await allEndPoints.auth.getProfile({})
    dispatch(setUserData(response.data.user))
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [getUserData.pending]: () => {}, // pending вызывается тогда, когда вызывается getPosts
        [getUserData.fulfilled]: () => {}, // fulfilled вызывается тогда, когда запрос прошел успешно
        [getUserData.rejected]: () => {}, // rejected вызывается тогда, когда есть ошибка                
    }
})

// экспортируем экшен и редьюсер
export const { setUserData } = userSlice.actions
export default userSlice.reducer