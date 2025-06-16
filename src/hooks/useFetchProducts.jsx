import { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

export default function useFetchProducts() {
  const [products, setProducts] = useContext(ProductsContext);

  useEffect(() => {
    if (!products || products.length === 0) {
      fetch("https://api.jsoning.com/mock/public/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) =>
          console.error("Error occurred while fetching products:", error),
        );
    }
  }, [products, setProducts]);

  return products;
}
