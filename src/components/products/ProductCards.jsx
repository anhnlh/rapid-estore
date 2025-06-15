import { useEffect } from "react";

export default function ProductCards({
  products,
  setProducts,
  handleProductClick,
}) {
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
  return (
    <ul className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => {
        return (
          <li
            key={product.id}
            className="block cursor-pointer rounded-md bg-slate-600 p-3"
            onClick={() => handleProductClick(product)}
          >
            <h2 className="text-3xl font-light">{product.name}</h2>
            <ul className="mt-3">
              <li>Price: ${product.price}</li>
              <li>Category: {product.category}</li>
              <li>Stock: {product.stock}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
