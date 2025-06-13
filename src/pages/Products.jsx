import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

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
      <ul className="grid grid-cols-4 gap-4 mt-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="block bg-sky-600 rounded-md p-3 cursor-pointer"
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

      {selectedProduct && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
          onClick={handleCloseDetailView}
        >
          <div
            className="bg-sky-600 rounded-md p-5 w-1/2 relative"
            // clicking outside of detailed view card will close the view and prevent
            // closing if clicking inside.
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-2 text-3xl hover:cursor-pointer p-1"
              onClick={handleCloseDetailView}
            >
              &times;
            </button>
            <h2 className="text-3xl font-light">{selectedProduct.name}</h2>
            <ul className="mt-3">
              <li>Price: ${selectedProduct.price}</li>
              <li>Category: {selectedProduct.category}</li>
              <li>Description: {selectedProduct.description}</li>
              <li>Stock: {selectedProduct.stock}</li>
              <li>
                Rating: {selectedProduct.rating.rate} ★ (
                {selectedProduct.rating.count} reviews)
              </li>
              <li>Image URL: {selectedProduct.image_url}</li>
              <li>SKU: {selectedProduct.sku}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
