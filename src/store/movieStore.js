import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const fetchMovieList = createAsyncThunk('user/fetchMovieList', () => {
    return axios
        .get('https://api.themoviedb.org/3/discover/movie?api_key=b02a57c703d399b9e21feb0b24fe4681')
        .then((response) => response.data.results)
})

const userSlice = createSlice({
    name: 'movies',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchMovieList.pending, state => {
            state.loading = true
        }),
        builder.addCase(fetchMovieList.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload,
            state.error = ''
        }),
        builder.addCase(fetchMovieList.rejected, (state, action) => {
            state.loading = false
            state.users = [],
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer