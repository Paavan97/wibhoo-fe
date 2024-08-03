import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../App/store"; // Adjust the import path as needed
import { BASE_URL } from "../../utils/appURL";
import { STATUS } from "../../utils/status";

// Define types for the state
 interface ProductCategoryState {
  categories: any[];
  categoriesStatus: STATUS;
  categoryProducts: any[]; // Adjust the type based on the structure of your product
  categoryProductsStatus: STATUS;
}

// Define the initial state using those types
const initialState: ProductCategoryState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE,
};

// Create async thunks with typed responses
export const fetchAsyncCategories = createAsyncThunk<[]>(
  'categories/fetch',
  async () => {
    const response = await fetch(`${BASE_URL}products/categories`);
    const data = await response.json();
    return data;
  }
);

export const fetchAsyncProductsOfCategory = createAsyncThunk<any[], string>(
  'category-products/fetch',
  async (category: string) => {
    const response = await fetch(`${BASE_URL}products/category/${category}`);
    const data = await response.json();
    return data.products;
  }
);

// Create the slice
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategories.pending, (state) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncCategories.rejected, (state) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(fetchAsyncProductsOfCategory.pending, (state) => {
        state.categoryProductsStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncProductsOfCategory.fulfilled, (state, action: PayloadAction<any[]>) => { // Adjust type based on your product structure
        state.categoryProducts = action.payload;
        state.categoryProductsStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncProductsOfCategory.rejected, (state) => {
        state.categoryProductsStatus = STATUS.FAILED;
      });
  }
});

// Export selectors with typed state
export const getAllCategories = (state: RootState) => state.ProductCategory.categories;
export const getAllProductsByCategory = (state: RootState) => state.ProductCategory.categoryProducts;
export const getCategoryProductsStatus = (state: RootState) => state.ProductCategory.categoryProductsStatus;

// Export the reducer and state type
export default categorySlice.reducer;
export type { ProductCategoryState };
