import { IProduct } from '@/types/IProduct';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ICartItem extends IProduct {
  quantity: number; // cantidad del producto del carrito
}

interface ICartState {
  items: ICartItem[]
}

const initialState: ICartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem> ) {
      const existingItem = state.items.find((item) =>item.id === action.payload.id)
      if(existingItem) {
        // Si existe aumentamos la cantidad
        // existingItem.quantity  = existingItem.quantity + action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
      } else {
        // Si no existe, lo agregamos como nuevo item
        state.items.push(action.payload)
      }
    },
    removeFromCart(state, action:PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;