import { Suspense, useState, lazy, useContext } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import ProductDetailView from "../components/products/ProductDetailView";
import AddProductForm from "../components/products/AddProductForm";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductCards = lazy(() => import("../components/products/ProductCards"));

export default function Products() {
  // fetch and store products from the /products endpoint
  const [products, setProducts] = useContext(ProductsContext);
  // setting selectedProduct state for detailed view
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const handleCloseDetailView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="mt-10 h-lvh text-left">
      <Breadcrumb />
      <h1 className="text-4xl">Products</h1>
      <AddProductForm setProducts={setProducts} />
      <Suspense
        fallback={
          <h2 className="mt-5 text-3xl font-bold text-sky-400">Loading...</h2>
        }
      >
        <ProductCards
          products={products}
          setProducts={setProducts}
          handleProductClick={handleProductClick}
        />
      </Suspense>
      <ProductDetailView
        selectedProduct={selectedProduct}
        handleCloseDetailView={handleCloseDetailView}
      />
    </div>
  );
}
