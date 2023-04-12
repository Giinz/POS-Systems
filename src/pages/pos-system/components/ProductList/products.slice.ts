import { createSlice } from '@reduxjs/toolkit';
import { data } from 'dev-data/data';

const productsSlice = createSlice({
  name: 'products',
  initialState: data,
  reducers: {}
});

const productsReducer = productsSlice.reducer;

export default productsReducer;
