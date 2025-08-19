import { configureStore } from '@reduxjs/toolkit'
import cartreducer from "./features/cart/CartSlice"
import booksApi from './features/books/booksApi'

export const store = configureStore({
  reducer: {
    cart: cartreducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware)
})