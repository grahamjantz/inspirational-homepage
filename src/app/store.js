import { configureStore } from '@reduxjs/toolkit';
import goalsSliceReducer from '../features/Goals/goalsSlice';

export const store = configureStore({
  reducer: {
    goals: goalsSliceReducer
  }
});
