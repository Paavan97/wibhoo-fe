import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import categoryReducer, { ProductCategoryState } from "../feature/CategorySlice"; 
import ProductsReducer from "../feature/ProductSlice"
export const store = configureStore({
  reducer: {
    ProductCategory: categoryReducer,
    Products: ProductsReducer
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
