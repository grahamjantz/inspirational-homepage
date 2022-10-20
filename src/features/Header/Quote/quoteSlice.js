import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        quote: 'quote',
        author: 'author'
    }
]

// export const fetchQuote = createAsyncThunk(
//     'quote/fetchQuote',
//     async () => {
//         const res = await fetch('https://quotes.rest/qod/?category=inspire&language=en')
//         const data = await res.json()
//         return data
//     }
// )

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        addQuote: (state, action) => {
            state.quote = action.payload
        },
    }
})

export const selectQuote = (state) => state.quote;

export const { addQuote } = quoteSlice.actions
export default quoteSlice.reducer