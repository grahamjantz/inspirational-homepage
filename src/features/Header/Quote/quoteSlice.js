import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = 
    {
        text: 'quote',
        author: 'author'
    }


export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote',
    async () => {
        const res = await fetch('https://quotes.rest/qod/?category=inspire&language=en')
        const data = await res.json()
        return data
    }
)

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        addQuote: (state, action) => {
            return state = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuote.fulfilled, (state, action) => {
            state.text = action.payload.contents.quotes[0].quote
            state.author = action.payload.contents.quotes[0].author
        })
        builder.addCase(fetchQuote.pending, (state) => {
            state.text = ''
            state.author = ''
        })
        builder.addCase(fetchQuote.rejected, (state) => {
            state.text = initialState.text
            state.author = initialState.author
        })
    }
})

export const selectQuote = (state) => state.quote;

export const { addQuote } = quoteSlice.actions
export default quoteSlice.reducer