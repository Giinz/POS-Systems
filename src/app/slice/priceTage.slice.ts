import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const priceTagSlice = createSlice({
  name: 'priceTag',
  initialState: 'A',
  reducers: {
    selectPriceTag: (state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
});
const priceTagReducer = priceTagSlice.reducer;

export const { selectPriceTag } = priceTagSlice.actions;
export default priceTagReducer;
