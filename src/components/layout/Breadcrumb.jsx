import { Link } from "react-router";

export default function Breadcrumb() {
  return (
    <>
      <nav className="mb-4 text-sm text-gray-500">
        {location.pathname === "/home" ? (
          <span className="text-white">Home</span>
        ) : (
          <Link to="/home" className="hover:underline">
            Home
          </Link>
        )}
        {location.pathname.includes("/products") && (
          <>
            {" / "}
            <span className="text-white">Products</span>
          </>
        )}
        {location.pathname.includes("/carts") && (
          <>
            {" / "}
            <span className="text-white">Carts</span>
          </>
        )}
      </nav>
    </>
  );
}
