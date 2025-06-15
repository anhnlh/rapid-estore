import { useState } from "react";

/**
 * A React component that renders a form for adding a new product to a list of products.
 * Includes functionality to display and hide the form, and handle form submission.
 * Currently adds a local product to the list of products, so there is no persistence to
 * newly added products.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.products - The current list of products.
 * @param {Function} props.setProducts - A function to update the list of products.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <AddProductForm products={products} setProducts={setProducts} />
 *
 * @description
 * The component consists of:
 * - A button to display the form.
 * - A modal containing the form for adding a new product.
 * - Form fields for product details such as name, price, category, description, stock, rating, image URL, and SKU.
 * - Cancel and Add buttons to close the form or submit the new product.
 *
 * The form submission creates a new product object and updates the product list using the `setProducts` function.
 */
export default function AddProductForm({ products, setProducts }) {
  let curId = 11;
  const [displayForm, setDisplayForm] = useState(false);
  const handleAddButtonClick = () => {
    setDisplayForm(true);
  };
  const handleCloseAddProductForm = () => {
    setDisplayForm(false);
  };

  const handleFormSubmit = (formData) => {
    const newProduct = {
      id: curId,
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
    curId += 1;
  };
  return (
    <>
      <button
        className="mt-5 p-3 text-2xl bg-sky-600 rounded-md hover:bg-sky-300 duration-500 font-semibold hover:px-5 hover:cursor-pointer"
        onClick={handleAddButtonClick}
      >
        Add Product
      </button>
      {displayForm && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
          onClick={handleCloseAddProductForm}
        >
          <div
            className="bg-slate-600 rounded-md p-5 w-1/2 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-2 text-3xl hover:cursor-pointer p-1"
              onClick={handleCloseAddProductForm}
            >
              &times;
            </button>
            <h1 className="text-3xl">Add New Product</h1>
            <form className="grid gap-1 mt-5" action={handleFormSubmit}>
              <label className="font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                required
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
                placeholder="RTX 5090"
                type="text"
              />
              <label className="font-semibold">
                Price (USD) <span className="text-red-500">*</span>
              </label>
              <input
                name="price"
                required
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
                placeholder="2000"
                type="number"
              />
              <label className="font-semibold">
                Category <span className="text-red-500">*</span>
              </label>
              <input
                name="category"
                required
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
                placeholder="Graphics Card"
                type="text"
              />
              <label className="font-semibold">
                Description <span className="text-red-500">*</span>
              </label>
              <input
                name="description"
                required
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
                placeholder="A great way to increase your electricity bill!"
                type="text"
              />
              <label className="font-semibold">
                Stock <span className="text-red-500">*</span>
              </label>
              <input
                name="stock"
                required
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
                placeholder="0"
                type="number"
              />
              <label className="font-semibold">
                Rating (out of 5) <span className="text-red-500">*</span>
              </label>
              <input
                name="rating_value"
                required
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
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
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
                placeholder="59"
                type="number"
              />
              <label className="font-semibold">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                name="image_url"
                required
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
                placeholder="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/"
                type="text"
              />
              <label className="font-semibold">
                SKU <span className="text-red-500">*</span>
              </label>
              <input
                name="sku"
                required
                className="outline-2 rounded-md py-0.5 px-2 mt-0.5 mb-2.5 outline-slate-300 font-normal"
                placeholder="VCG509032TFXXPB1-O"
                type="text"
              />
              <div className="grid grid-cols-2 gap-3 mt-5">
                <button
                  className="py-2 bg-red-400 rounded-md hover:cursor-pointer hover:bg-red-300 duration-500"
                  onClick={handleCloseAddProductForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 bg-sky-600 rounded-md hover:cursor-pointer hover:bg-sky-400 duration-500"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
