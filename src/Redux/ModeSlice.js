import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: "light",
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeMode: (state) => {
            state.mode = state.mode == "light" ? "dark" : "light"
        }
    },
})

export const { changeMode } = counterSlice.actions

export const selectMode = (state) => state.counter.mode;

export default counterSlice.reducer