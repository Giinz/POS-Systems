import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Order } from 'types/order.type';
import { ProductType } from 'types/product.type';

const initialState: Order[] = [];

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductType>) => {
      const productIndex = action.payload.id;
      const productInOrder = state.find((item) => item.id === productIndex);
      if (!productInOrder) {
        const product = { ...action.payload, quantity: 1 };
        state.push(product);
      } else {
        productInOrder.quantity += 1;
      }
    },
    incrementQuantity: (state, action: PayloadAction<Order>) => {
      const productInOrder = state.find((item) => item.id === action.payload.id);
      if (productInOrder) productInOrder.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<Order>) => {
      const productInOrder = state.find((item) => item.id === action.payload.id);
      const foundOrderIndex = state.findIndex((order) => order.id === action.payload.id);
      if (productInOrder) {
        productInOrder.quantity -= 1;
        productInOrder.quantity === 0 && foundOrderIndex !== -1 && state.splice(foundOrderIndex, 1);
      }
    },
    deleteAllOrder: (state) => {
      state.length = 0;
    }
  }
});

const orderReducer = orderSlice.reducer;

export default orderReducer;
export const { addItem, incrementQuantity, decrementQuantity, deleteAllOrder } = orderSlice.actions;
