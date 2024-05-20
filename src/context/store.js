import { configureStore } from "@reduxjs/toolkit";
// import heartSlice from "./heartSlice";
// import cartSlice from "./cartSlice";
import { api } from "./api/api";
// import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    // cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
