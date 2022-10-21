import { configureStore } from '@reduxjs/toolkit';
import goalsSliceReducer from '../features/Goals/goalsSlice';
import quoteSliceReducer from '../features/Header/Quote/quoteSlice'
import imagesSliceReducer from '../images/imagesSlice';
import weatherSliceReducer from '../features/Header/Weather/weatherSlice'

export const store = configureStore({
  reducer: {
    goals: goalsSliceReducer,
    quote: quoteSliceReducer,
    images: imagesSliceReducer,
    weather: weatherSliceReducer,
  }
});
