import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Carts from "./pages/Carts";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </>
  );
}
