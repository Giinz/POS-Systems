import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import orderReducer from 'pages/pos-system/POS.slice';
import productsReducer from 'pages/pos-system/components/ProductList/products.slice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    products: productsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
