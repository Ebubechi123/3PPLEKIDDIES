import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import Category from "../pages/category";
import Home from "../pages/home";
import ProductDetails from "../pages/product_details";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:slug" element={<ProductDetails />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
