import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchMovieType = createAsyncThunk('user/fetchMovieType', (type)=> {
    return axios
        .get(`https://api.themoviedb.org/3/movie/${type && type}?api_key=b02a57c703d399b9e21feb0b24fe4681`)
        .then(response => response.data.results)
})

const typeSlice = createSlice({
    name: 'type',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchMovieType.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchMovieType.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchMovieType.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        })
    }
})

export default typeSlice.reducer