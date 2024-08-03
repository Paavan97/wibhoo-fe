import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../App/store"; // Assuming you have a store setup
import { BASE_URL } from "../../utils/appURL";
import { STATUS } from "../../utils/status";



interface ProductState {
  products: any[];
  productsStatus: STATUS;
  productSingle: any;
  productSingleStatus: STATUS;
}

const initialState: ProductState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
};

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetch",
  async (limit: number) => {
    const response = await fetch(`${BASE_URL}products?limit=${limit}`);
    const data = await response.json();
    return data.products;
  }
);

export const fetchAsyncProductSingle = createAsyncThunk(
  "product-single/fetch",
  async (id: number) => {
    console.log(id,"id")
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(
        fetchAsyncProducts.fulfilled,
        (state, action) => {
          state.products = action.payload;
          state.productsStatus = STATUS.SUCCEEDED;
        }
      )
      .addCase(fetchAsyncProducts.rejected, (state) => {
        state.productsStatus = STATUS.FAILED;
      })
      .addCase(fetchAsyncProductSingle.pending, (state) => {
        state.productSingleStatus = STATUS.LOADING;
      })
      .addCase(
        fetchAsyncProductSingle.fulfilled,
        (state, action) => {
          state.productSingle = action.payload;
          state.productSingleStatus = STATUS.SUCCEEDED;
        }
      )
      .addCase(fetchAsyncProductSingle.rejected, (state) => {
        state.productSingleStatus = STATUS.FAILED;
      });
  },
});

export const getAllProducts = (state: RootState) => state.Products.products;
export const getAllProductsStatus = (state: RootState) =>
  state.Products.productsStatus;
export const getProductSingle = (state: RootState) =>
  state.Products?.productSingle;
export const getSingleProductStatus = (state: RootState) =>
  state.Products.productSingleStatus;
export default productSlice.reducer;
export type { ProductState };
