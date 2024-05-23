import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const fetchDetails = createAsyncThunk('user/fetchDetails', (id) => {
    return axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=b02a57c703d399b9e21feb0b24fe4681`)
        .then(response => response.data)
})

const detailSlice = createSlice({
    name: 'type',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchDetails.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchDetails.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        })
    }
})

export default detailSlice.reducer
