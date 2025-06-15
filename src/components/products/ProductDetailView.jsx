export default function ProductDetailView({
  handleCloseDetailView,
  selectedProduct,
}) {
  return (
    selectedProduct && (
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
        onClick={handleCloseDetailView}
      >
        <div
          className="bg-slate-600 rounded-md p-5 w-1/2 relative"
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
    )
  );
}
