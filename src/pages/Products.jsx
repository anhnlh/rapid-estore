import { Suspense, useState, lazy } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetailView from "../components/ProductDetailView";
import AddProductForm from "../components/AddProductForm";

const ProductCards = lazy(() => import("../components/ProductCards"));

export default function Products() {
  // fetch and store products from the /products endpoint
  const [products, setProducts] = useState([]);
  // setting selectedProduct state for detailed view
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const handleCloseDetailView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={`text-left mt-10 h-lvh`}>
      <Breadcrumb />
      <h1 className="text-4xl">Products</h1>
      <AddProductForm products={products} setProducts={setProducts} />
      <Suspense
        fallback={<h1 className="text-3xl font-bold mt-5">Loading...</h1>}
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
