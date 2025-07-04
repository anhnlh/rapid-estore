export default function ProductDetailView({
  handleCloseDetailView,
  selectedProduct,
}) {
  return (
    selectedProduct && (
      <div
        className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/50"
        onClick={handleCloseDetailView}
      >
        <div
          className="relative max-h-[90vh] w-3/4 overflow-y-auto rounded-md bg-slate-600 p-5"
          // clicking outside of detailed view card will close the view and prevent
          // closing if clicking inside.
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-0 right-2 p-1 text-3xl hover:cursor-pointer"
            onClick={handleCloseDetailView}
          >
            &times;
          </button>
          <h2 className="text-3xl font-light">{selectedProduct.name}</h2>
          <ul className="mt-3 overflow-hidden">
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
    )
  );
}
