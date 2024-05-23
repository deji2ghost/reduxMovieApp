import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieStore'
import typeReducer from './typeStore'
import detailsReducer from './details'

const store = configureStore({
    reducer: {
        user: movieReducer,
        type: typeReducer,
        det: detailsReducer
    }
})

export default store