import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import categoryReducer from "../feature/CategorySlice"; 
import ProductsReducer from "../feature/ProductSlice"
import CartReducer from "../feature/CartSlice"

export const store = configureStore({
  reducer: {
    ProductCategory: categoryReducer,
    Products: ProductsReducer,
    CartItem: CartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
