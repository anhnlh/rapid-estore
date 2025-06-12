import { Link } from "react-router";

export default function Navbar() {
  return (
    <Link to="/" className="absolute top-0 left-0 p-4" href="/">
      Rapid E-Store
    </Link>
  );
}
