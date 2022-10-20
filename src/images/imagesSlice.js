import { createSlice } from '@reduxjs/toolkit'
import rainForest from './rainForest.jpg'

const initialState = [
    {
        src: {
            landscape: rainForest
        }
    }
]

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        scrollUpImage (state, action) {
            return state[action.payload]
        }
    }
})