import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { data, dataType } from 'dev-data/data';
import { CategoriesType } from 'types/categories.type';

const string: string | null = window.sessionStorage.getItem('products');
const sessionData: dataType[] = string && JSON.parse(string);
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productList: sessionData || data
  },
  reducers: {
    renderProducts: (state, action: PayloadAction<CategoriesType>) => {
      const productsFiltered = data.filter((item) =>
        action.payload.category === 'All' ? item : item.category === action.payload.category
      );
      window.sessionStorage.setItem('products', JSON.stringify(productsFiltered));
      return {
        ...state,
        productList: productsFiltered
      };
    },
    locationSelected: (state, action: PayloadAction<string>) => {
      const productsFiltered = data.filter((item) => (action.payload ? item.category === action.payload : item));
      window.sessionStorage.setItem('products', JSON.stringify(productsFiltered));
      return {
        ...state,
        productList: productsFiltered
      };
    }
  }
});

const productsReducer = productsSlice.reducer;

export const { renderProducts, locationSelected } = productsSlice.actions;
export default productsReducer;
