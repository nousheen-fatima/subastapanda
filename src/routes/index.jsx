import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Product";
import Signup from "../pages/Signup";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
