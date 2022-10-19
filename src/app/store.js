import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  //remove this redundant function when begin working with the store
  reducer: () => 0,
});
