import { useEffect, useState } from "react";

export default function CartCards({
  handleCartClick,
  carts,
  setCarts,
  users,
  setUsers,
}) {
  const getCarts = () =>
    fetch("https://api.jsoning.com/mock/public/carts")
      .then((response) => response.json())
      .then((data) => {
        setCarts(data);
      })
      .catch((error) => {
        console.log(`Error occured while fetching carts: ${error}`);
      });
  const getUsers = () =>
    fetch("https://api.jsoning.com/mock/public/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(`Error occured while fetching users: ${error}`);
      });

  useEffect(() => {
    Promise.all([getCarts(), getUsers()]);
  }, []);

  return (
    <ul className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {carts.map((cart) => {
        const cartUser = users.find((user) => user.id == cart.userId);
        let statusColor = "";
        if (cart.status === "Completed") {
          statusColor = "text-green-500";
        } else if (cart.status === "Pending") {
          statusColor = "text-orange-500";
        } else if (cart.status === "Abandoned") {
          statusColor = "text-red-500";
        }

        return (
          <li
            key={cart.id}
            className="block cursor-pointer rounded-md bg-slate-600 p-3"
            onClick={() => handleCartClick(cart)}
          >
            <h2 className="text-3xl font-light">
              {cartUser !== undefined
                ? `${cartUser.firstname} ${cartUser.lastname}`
                : "No Associated User"}
            </h2>
            <ul className="mt-3">
              <li>Date: {new Date(cart.date).toLocaleDateString("en-US")}</li>
              <li>
                Status: <span className={statusColor}>{cart.status}</span>
              </li>
              <li>
                Items in cart:{" "}
                {cart.items.reduce((acc, item) => item.quantity + acc, 0)}
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
