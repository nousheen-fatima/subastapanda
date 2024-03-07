import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import AboutUs from "../pages/AboutUs";
import Category from "../pages/Category";
import ContactUs from "../pages/Contact";
import ForgotpasswordPage from "../pages/Forgotpassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Products from "../pages/Product";
import Signup from "../pages/Signup";
import SingleProduct from "../pages/SingleProduct";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotpasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
