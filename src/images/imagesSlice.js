import { createSlice } from '@reduxjs/toolkit'
import rainForest from './rainForest.jpg'
import { imageArray } from '../App'

const initialState = imageArray

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        scrollUpImage (state, action) {
            return state[action.payload]
        }
    }
})

