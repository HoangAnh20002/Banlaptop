import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter_slice.js';
import productReducer from '../features/product/product_slice.js';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,

  },
 
});

