import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/products?search=${category}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "products/fetchAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDetailProduct = createAsyncThunk(
  "products/fetchDetailProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  productDetail: [],
  totalProducts: 0,
  minPrice: 0,
  maxPrice: 0,
  error: null,
  filteredProducts: [],
  sort: "price-lowest",
  filters: {
    search: "",
    category: "all",
    price: 0,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const { search, category, price } = action.payload;
      let tempProducts = [...state.products];
      if (search) {
        tempProducts = tempProducts.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category.id === category
        );
      }
      tempProducts = tempProducts.filter(
        (product) => product.start_price <= price
      );
      state.filteredProducts = tempProducts;
      state.totalProducts = tempProducts.length;
    },
    replaceProducts: (state, action) => {
      const newProducts = action.payload;
      state.products = newProducts;
      state.filteredProducts = newProducts;
      state.totalProducts = newProducts.length;
      const prices = newProducts.map((product) => product.start_price);
      state.maxPrice = Math.max(...prices);
      state.minPrice = Math.min(...prices);
      state.filters.price = Math.max(...prices);
    },
    setSortingOption: (state, action) => {
      state.sort = action.payload;
    },
    sortProducts: (state, action) => {
      const value = action.payload;
      state.sort = value;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearFilter: (state) => {
      state.filters = {
        ...initialState.filters,
        price: state.maxPrice,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message || "Categories Products Not Found";
      })
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message || "Products Not Found";
      })
      .addCase(getDetailProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Product Detail Not Found";
      });
  },
});

export const {
  filterProducts,
  replaceProducts,
  setSortingOption,
  sortProducts,
  setFilters,
  clearFilter,
} = productsSlice.actions;

export default productsSlice.reducer;
