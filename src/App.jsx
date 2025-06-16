import { Routes, Route, BrowserRouter } from "react-router";
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import { useState } from "react";
import { ProductsContext } from "./contexts/ProductsContext";

export default function App() {
  // store products
  const [products, setProducts] = useState([]);
  return (
    <BrowserRouter>
      <ProductsContext value={[products, setProducts]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </ProductsContext>
    </BrowserRouter>
  );
}
