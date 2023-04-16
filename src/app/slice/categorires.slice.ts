import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialData } from 'dev-data/data';
import { CategoriesType } from 'types/categories.type';

const string: string | null = window.sessionStorage.getItem('categories');
const sessionData: CategoriesType[] = string && JSON.parse(string);
const categoriesSlice = createSlice({
  name: 'products',
  initialState: { categories: sessionData || initialData },
  reducers: {
    categorySelected: (state, action: PayloadAction<CategoriesType>) => {
      const newState = initialData.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      });
      window.sessionStorage.setItem('categories', JSON.stringify(newState));
      return { ...state, categories: newState };
    },
    categoriesLocation: (state, action: PayloadAction<string>) => {
      const newState = initialData.map((item) => {
        if (item.category === action.payload) {
          return { ...item, isActive: true };
        }
        if (item.category === 'all' && (action.payload === '' || 'all')) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      });
      window.sessionStorage.setItem('categories', JSON.stringify(newState));
      return {
        ...state,
        categories: newState
      };
    }
  }
});

const categoriesReducer = categoriesSlice.reducer;
export const { categorySelected, categoriesLocation } = categoriesSlice.actions;
export default categoriesReducer;
