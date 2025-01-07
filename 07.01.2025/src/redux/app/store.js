import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { categories } from "../services/productAPI.JS";

import wishlistReducer from "../features/WishlistApi";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    // Add the generated reducer as a specific top-level slice
    [categories.reducerPath]: categories.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categories.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);