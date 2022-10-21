import { configureStore } from '@reduxjs/toolkit';
import goalsSliceReducer from '../features/Goals/goalsSlice';
import quoteSliceReducer from '../features/Header/Quote/quoteSlice'
import imagesSliceReducer from '../images/imagesSlice';

export const store = configureStore({
  reducer: {
    goals: goalsSliceReducer,
    quote: quoteSliceReducer,
    images: imagesSliceReducer
  }
});
