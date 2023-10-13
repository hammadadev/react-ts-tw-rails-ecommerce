import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
};

type initialStateT = {
  products: Product[];
  isLoading: boolean;
};

export const getProducts = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const res = await fetch(`${import.meta.env.VITE_RAILS_BASE_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE2OTcyMjYxNzYsImlzcyI6IlJhaWxzIGFwcCJ9.NHTyPIo2baDTpdJErVxZmv05yu6-wlqrkCKKXRauPMU",
      },
    });

    const data = await res.json();
    return data;
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
