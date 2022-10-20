import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from './reducer.js'
import goalsReducer from './features/Goals/goalsSlice'
import quoteReducer from './features/Header/Quote/quoteSlice' 

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
        goals: goalsReducer
    }
})
