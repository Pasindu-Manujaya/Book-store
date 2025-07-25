import { configureStore } from '@reduxjs/toolkit'
import cartreducer from "./features/cart/CartSlice"

export const store = configureStore({
  reducer: {
    cart: cartreducer,
  }
})