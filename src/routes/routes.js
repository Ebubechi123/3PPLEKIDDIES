import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import ProductDetails from "../pages/product_details";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
