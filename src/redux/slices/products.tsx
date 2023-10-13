import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ProductT } from "../../types";

type initialStateT = {
  products: ProductT[];
  isLoading: boolean;
};

export const getProducts = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const res = await fetch(`${import.meta.env.VITE_RAILS_BASE_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data.data;
  }
);

const initialState: initialStateT = {
  products: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    });

    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    });
  },
});

export default productSlice.reducer;
