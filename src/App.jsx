import { Routes, Route, BrowserRouter } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Carts from "./pages/Carts";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </BrowserRouter>
  );
}
