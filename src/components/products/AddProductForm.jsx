import { useRef, useState, useEffect } from "react";
import useFetchProducts from "../../hooks/useFetchProducts";

export default function AddProductForm({ setProducts }) {
  const products = useFetchProducts();
  const curIdRef = useRef(0);
  // get the highest current id and increment 1
  useEffect(() => {
    if (products.length > 0) {
      curIdRef.current =
        products.reduce(
          (curMax, product) => Math.max(curMax, parseInt(product.id)),
          0,
        ) + 1;
    }
  }, [products]);
  const [displayForm, setDisplayForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddButtonClick = () => {
    setDisplayForm(true);
  };

  const handleCloseAddProductForm = () => {
    setDisplayForm(false);
  };

  const handleFormSubmit = (formData) => {
    const newProduct = {
      id: curIdRef.current++,
      name: formData.get("name"),
      price: formData.get("price"),
      category: formData.get("category"),
      description: formData.get("description"),
      stock: formData.get("stock"),
      rating: {
        rate: formData.get("rating_value"),
        count: formData.get("rating_count"),
      },
      image_url: formData.get("image_url"),
      sku: formData.get("sku"),
    };
    setProducts(products.concat(newProduct));
    handleCloseAddProductForm();

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <>
      <button
        className="mt-5 rounded-md bg-sky-600 p-3 text-2xl font-semibold duration-500 hover:cursor-pointer hover:bg-sky-300 hover:px-5"
        onClick={handleAddButtonClick}
      >
        Add Product
      </button>
      {displayForm && (
        <div
          className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/50"
          onClick={handleCloseAddProductForm}
        >
          <div
            className="relative w-1/2 rounded-md bg-slate-600 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-2 p-1 text-3xl hover:cursor-pointer"
              onClick={handleCloseAddProductForm}
            >
              &times;
            </button>
            <h1 className="text-3xl">Add New Product</h1>
            <form className="mt-5 grid gap-1" onSubmit={handleFormSubmit}>
              <label className="font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="RTX 5090"
                type="text"
              />
              <label className="font-semibold">
                Price (USD) <span className="text-red-500">*</span>
              </label>
              <input
                name="price"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="2000"
                type="number"
              />
              <label className="font-semibold">
                Category <span className="text-red-500">*</span>
              </label>
              <input
                name="category"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="Graphics Card"
                type="text"
              />
              <label className="font-semibold">
                Description <span className="text-red-500">*</span>
              </label>
              <input
                name="description"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="A great way to increase your electricity bill!"
                type="text"
              />
              <label className="font-semibold">
                Stock <span className="text-red-500">*</span>
              </label>
              <input
                name="stock"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="0"
                type="number"
              />
              <label className="font-semibold">
                Rating (out of 5) <span className="text-red-500">*</span>
              </label>
              <input
                name="rating_value"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="5"
                min="0"
                max="5"
                type="number"
              />
              <label className="font-semibold">
                Rating Count <span className="text-red-500">*</span>
              </label>
              <input
                name="rating_count"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="59"
                type="number"
              />
              <label className="font-semibold">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                name="image_url"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/"
                type="text"
              />
              <label className="font-semibold">
                SKU <span className="text-red-500">*</span>
              </label>
              <input
                name="sku"
                required
                className="mt-0.5 mb-2.5 rounded-md px-2 py-0.5 font-normal outline-2 outline-slate-300"
                placeholder="VCG509032TFXXPB1-O"
                type="text"
              />
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  className="rounded-md bg-red-400 py-2 duration-500 hover:cursor-pointer hover:bg-red-300"
                  onClick={handleCloseAddProductForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-sky-600 py-2 duration-500 hover:cursor-pointer hover:bg-sky-400"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="fixed right-5 bottom-5 rounded-md bg-green-500 p-3 text-white shadow-lg">
          Product successfully added!
        </div>
      )}
    </>
  );
}
