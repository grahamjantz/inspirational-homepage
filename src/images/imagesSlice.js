import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createClient } from 'pexels';
import { imageArray } from '../App';

const initialState = {
    currentIndex: 0,
    arr: imageArray
}

export const fetchImages = createAsyncThunk(
    'images/fetchImages',
    async () => {
        const key = '563492ad6f91700001000001f7e410324a8c4afd97a23ceb8906e67c'
        const client = createClient(key);
        const query = 'Nature';
        
        return client.photos.search({ query, per_page: 5 }).then(photos => photos.photos);
    }
)


export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        scrollUpImage: (state, action) => {
            if (state.currentIndex < action.payload.length - 1) {
                state.currentIndex++
            } else {
                state.currentIndex = 0
            }
        },
        scrollDownImage: (state, action) => {
            if (state.currentIndex !== 0) {
                state.currentIndex--
            } else {
                state.currentIndex = action.payload.length - 1
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImages.fulfilled, (state,action) => {
            state.arr = action.payload
        })
        builder.addCase(fetchImages.rejected, (state) => {
            state.arr = imageArray
        })
    },
})

export const selectCurrentIndex = (state) => state.images.currentIndex;
export const selectImageArray = (state) => state.images.arr;

export const { scrollUpImage, scrollDownImage } = imagesSlice.actions;
export default imagesSlice.reducer;
