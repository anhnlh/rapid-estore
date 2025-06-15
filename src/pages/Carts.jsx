import { Suspense, lazy, useState } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";

const CartCards = lazy(() => import("../components/carts/CartCards"));

export default function Carts() {
  const [carts, setCarts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedCart, setSelectedCart] = useState(null);
  const handleCartClick = (cart) => {
    setSelectedCart(cart);
  };
  const handleCloseDetailView = () => {
    setSelectedCart(null);
  };
  return (
    <div className="mt-10 h-lvh text-left">
      <Breadcrumb />
      <h1 className="text-4xl">Carts</h1>
      <Suspense
        fallback={
          <h2 className="mt-5 text-3xl font-bold text-sky-400">Loading...</h2>
        }
      >
        <CartCards
          carts={carts}
          setCarts={setCarts}
          users={users}
          setUsers={setUsers}
          handleCartClick={handleCartClick}
        />
      </Suspense>
    </div>
  );
}
