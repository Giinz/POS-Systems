import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import orderReducer from 'app/slice/order.slice';
import productsReducer from 'app/slice/products.slice';
import categoriesReducer from './slice/categorires.slice';
import priceTagReducer from './slice/priceTage.slice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    products: productsReducer,
    categories: categoriesReducer,
    priceTag: priceTagReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
