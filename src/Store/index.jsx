import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bidReducer from "../features/bid/bidSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import contactsReducer from "../features/contacts/contactsSlice";
import productsReducer from "../features/products/productsSlice";
import usersReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    contacts: contactsReducer,
    bid: bidReducer,
    products: productsReducer,
    users: usersReducer,
  },
});

export default store;
