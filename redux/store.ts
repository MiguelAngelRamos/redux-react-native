import { configureStore} from '@reduxjs/toolkit';


// Los reducers van a manejar partes especificas de nuestro estado global

import cartReducer from './slices/cartSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});