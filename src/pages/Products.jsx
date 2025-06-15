import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetailView from "../components/ProductDetailView";
import AddProductForm from "../components/AddProductForm";

export default function Products() {
  // fetch and store products from the /products endpoint
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.jsoning.com/mock/public/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(`Error occured while fetching products: ${error}`);
      });
  }, []);

  // setting selectedProduct state for detailed view
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const handleCloseDetailView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="text-left mt-10 w-lvh h-lvh">
      <Breadcrumb />
      <h1 className="text-4xl">Products</h1>
      <AddProductForm products={products} setProducts={setProducts} />
      <ul className="grid grid-cols-4 gap-4 mt-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="block bg-slate-600 rounded-md p-3 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <h2 className="text-3xl font-light">{product.name}</h2>
            <ul className="mt-3">
              <li>Price: ${product.price}</li>
              <li>Category: {product.category}</li>
              <li>Stock: {product.stock}</li>
            </ul>
          </li>
        ))}
      </ul>

      <ProductDetailView
        selectedProduct={selectedProduct}
        handleCloseDetailView={handleCloseDetailView}
      />
    </div>
  );
}
