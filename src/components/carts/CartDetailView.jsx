import useFetchProducts from "../../hooks/useFetchProducts";

export default function CartDetailView({
  selectedCart,
  users,
  handleCloseDetailView,
}) {
  const products = useFetchProducts();
  const cartUser =
    selectedCart && users.find((user) => user.id == selectedCart.userId);
  return (
    selectedCart && (
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
          <h2 className="text-3xl font-light">
            {cartUser !== undefined
              ? `${cartUser.firstname} ${cartUser.lastname}'s Cart`
              : "Abandoned Cart"}
          </h2>
          <ul className="mt-3 overflow-hidden">
            <li>Email: {cartUser && cartUser.email}</li>
            <li>
              Location:{" "}
              {cartUser &&
                `${cartUser.city}, ${cartUser.state} ${cartUser.zipcode}`}
            </li>
            <li>Phone: {cartUser && cartUser.phone}</li>
            <li>
              Products:
              {selectedCart.items.map((item) => {
                const product = products.find(
                  (product) => product.id == item.productId,
                );
                return (
                  product && (
                    <div
                      key={product.id}
                      className="mt-2 rounded-md bg-blue-900 p-3 text-sm shadow-md"
                    >
                      <h3 className="text-lg font-normal">{product.name}</h3>
                      <p>{product.description}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  )
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    )
  );
}
